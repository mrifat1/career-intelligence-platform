import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const categories = await prisma.category.findMany({
        select: { id: true, name: true, slug: true }
    })
    console.log('Categories:', JSON.stringify(categories, null, 2))

    const resourcesCount = await prisma.resource.count()
    console.log('Total Resources:', resourcesCount)

    const featuredCount = await prisma.resource.count({ where: { isFeatured: true } })
    console.log('Featured Resources Count:', featuredCount)

    const difficulties = await prisma.resource.findMany({
        select: { difficulty: true },
        distinct: ['difficulty']
    })
    console.log('Difficulties present:', JSON.stringify(difficulties, null, 2))

    const featuredResources = await prisma.resource.findMany({
        where: { isFeatured: true },
        include: { categories: true },
        take: 5
    })
    console.log('Sample Featured Resource Categories Slugs:', JSON.stringify(featuredResources.map(r => r.categories.map(c => c.slug)), null, 2))
}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
