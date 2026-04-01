import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResourceService {
    constructor(private prisma: PrismaService) { }

    async getCategories() {
        try {
            return await this.prisma.category.findMany({
                include: {
                    _count: {
                        select: { resources: true }
                    }
                },
                orderBy: { name: 'asc' }
            });
        } catch (error) {
            console.error('Failed to fetch categories:', error);
            return [];
        }
    }

    async createCategory(data: any) {
        try {
            const { name, slug } = data;
            const finalSlug = slug || name.toLowerCase().replace(/\s+/g, '-');
            return await this.prisma.category.create({
                data: { name, slug: finalSlug }
            });
        } catch (error) {
            console.error('Failed to create category:', error);
            throw error;
        }
    }

    async updateCategory(id: string, data: any) {
        try {
            return await this.prisma.category.update({
                where: { id },
                data
            });
        } catch (error) {
            console.error('Failed to update category:', error);
            throw error;
        }
    }

    async deleteCategory(id: string) {
        try {
            return await this.prisma.category.delete({
                where: { id }
            });
        } catch (error) {
            console.error('Failed to delete category:', error);
            throw error;
        }
    }

    async getFeaturedResources() {
        try {
            const categories = ['cp', 'algorithms', 'data-structures', 'graph-theory', 'math-theory', 'dp'];

            const featuredResources = await this.prisma.resource.findMany({
                where: {
                    isFeatured: true,
                    categories: {
                        some: {
                            slug: { in: categories }
                        }
                    }
                },
                include: {
                    categories: true
                },
                orderBy: { createdAt: 'desc' }
            });

            const categorizeByTrackAndDifficulty = (resources: any[]) => {
                const tracks = {
                    cp: { name: 'Competitive Programming', beginner: [], intermediate: [], advanced: [] },
                    fundamental: { name: 'Learning/General/Fundamental', beginner: [], intermediate: [], advanced: [] }
                };

                resources.forEach(res => {
                    const isCP = res.categories.some((c: any) => c.slug === 'cp');
                    const track = isCP ? tracks.cp : tracks.fundamental;
                    const difficulty = res.difficulty.toLowerCase() as 'beginner' | 'intermediate' | 'advanced';

                    if (track[difficulty]) {
                        (track[difficulty] as any[]).push({
                            title: res.title,
                            author: res.author || 'Unknown',
                            url: res.url,
                            type: res.type,
                            difficulty: res.difficulty
                        });
                    }
                });

                return tracks;
            };

            return categorizeByTrackAndDifficulty(featuredResources);
        } catch (error) {
            console.error('Failed to fetch featured resources:', error);
            return { cp: null, fundamental: null };
        }
    }

    async getTechSectors() {
        try {
            const sectors = await this.prisma.category.findMany({
                where: {
                    parentId: null,
                    slug: { not: 'foundations' },
                    children: { some: {} },
                },
                include: {
                    children: true,
                },
                orderBy: { name: 'asc' },
            });

            return sectors.map((s) => ({
                name: s.name,
                description: s.description || '',
                stacks: s.children.map((child) => ({
                    name: child.name,
                    slug: child.slug
                })),
            }));
        } catch (error) {
            console.error('Failed to fetch tech sectors:', error);
            return [];
        }
    }

    async getAllResources() {
        try {
            return await this.prisma.resource.findMany({
                include: {
                    categories: true
                },
                orderBy: { createdAt: 'desc' }
            });
        } catch (error) {
            console.error('Failed to fetch all resources:', error);
            return [];
        }
    }

    async createResource(data: any) {
        try {
            const { categoryIds, ...resourceData } = data;
            return await this.prisma.resource.create({
                data: {
                    ...resourceData,
                    categories: {
                        connect: categoryIds?.map((id: string) => ({ id })) || []
                    }
                },
                include: { categories: true }
            });
        } catch (error) {
            console.error('Failed to create resource:', error);
            throw error;
        }
    }

    async updateResource(id: string, data: any) {
        try {
            const { categoryIds, ...resourceData } = data;

            const updateData: any = { ...resourceData };
            if (categoryIds) {
                updateData.categories = {
                    set: categoryIds.map((id: string) => ({ id }))
                };
            }

            return await this.prisma.resource.update({
                where: { id },
                data: updateData,
                include: { categories: true }
            });
        } catch (error) {
            console.error('Failed to update resource:', error);
            throw error;
        }
    }

    async deleteResource(id: string) {
        try {
            return await this.prisma.resource.delete({
                where: { id }
            });
        } catch (error) {
            console.error('Failed to delete resource:', error);
            throw error;
        }
    }

    async getLandingPageData() {
        const [featured, sectors] = await Promise.all([
            this.getFeaturedResources(),
            this.getTechSectors()
        ]);
        return { featured, sectors };
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
