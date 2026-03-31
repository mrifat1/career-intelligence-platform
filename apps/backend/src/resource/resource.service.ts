import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResourceService {
    constructor(private prisma: PrismaService) { }

    async getLandingPageData() {
        try {
            // 1. Fetch Featured Topics for Carousel (Foundational)
            const featuredTopics = await this.prisma.category.findMany({
                where: {
                    isFeatured: true,
                    parentId: { not: null }, // Topics under sectors
                    resources: { some: {} },
                },
                include: {
                    resources: {
                        take: 4,
                        orderBy: { createdAt: 'desc' },
                    },
                },
                orderBy: { name: 'asc' },
            });

            // 2. Fetch Tech Sectors for Grid (Parent categories)
            const sectors = await this.prisma.category.findMany({
                where: {
                    parentId: null,
                    slug: { not: 'foundations' }, // Hide foundational parent from grid
                    children: { some: {} },
                },
                include: {
                    children: true,
                },
                orderBy: { name: 'asc' },
            });

            return {
                carousel: featuredTopics.map((cat) => ({
                    id: cat.id,
                    category: cat.name,
                    resources: cat.resources.map((res) => ({
                        title: res.title,
                        author: res.author || 'Unknown',
                        url: res.url,
                        type: res.type,
                        difficulty: res.difficulty
                    })),
                })),
                sectors: sectors.map((s) => ({
                    name: s.name,
                    description: s.description || '',
                    stacks: s.children.map((child) => ({
                        name: child.name,
                        slug: child.slug
                    })),
                })),
            };
        } catch (error) {
            console.error('Failed to fetch landing page data:', error);
            return { carousel: [], sectors: [] };
        }
    }

    async getResourcesByTopic(slug: string) {
        try {
            const category = await this.prisma.category.findUnique({
                where: { slug },
                include: {
                    resources: {
                        orderBy: { createdAt: 'desc' },
                    },
                },
            });

            if (!category) return { category: null, resources: [] };

            return {
                category: category.name,
                description: category.description,
                resources: category.resources.map((res) => ({
                    title: res.title,
                    author: res.author || 'Unknown',
                    url: res.url,
                    type: res.type,
                    difficulty: res.difficulty
                })),
            };
        } catch (error) {
            console.error('Failed to fetch resources by topic:', error);
            return { category: null, resources: [] };
        }
    }
}
