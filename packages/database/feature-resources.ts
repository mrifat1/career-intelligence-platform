import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Mark some CP, Algorithms, and Data Structures resources as featured
    const slugsToFeature = ['cp', 'algorithms', 'data-structures', 'graph-theory', 'dp'];

    const categories = await prisma.category.findMany({
        where: { slug: { in: slugsToFeature } }
    });

    const categoryIds = categories.map(c => c.id);

    const updated = await prisma.resource.updateMany({
        where: {
            categories: {
                some: {
                    id: { in: categoryIds }
                }
            }
        },
        data: {
            isFeatured: true
        }
    });

    console.log(`Updated ${updated.count} resources as featured.`);
}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
