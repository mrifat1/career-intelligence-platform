import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ResourceService } from './resource.service';

@Controller('resource')
export class ResourceController {
    constructor(private readonly resourceService: ResourceService) { }

    @Get()
    getAllResources() {
        return this.resourceService.getAllResources();
    }

    @Get('categories')
    getCategories() {
        return this.resourceService.getCategories();
    }

    @Post('categories')
    createCategory(@Body() data: any) {
        return this.resourceService.createCategory(data);
    }

    @Patch('categories/:id')
    updateCategory(@Param('id') id: string, @Body() data: any) {
        return this.resourceService.updateCategory(id, data);
    }

    @Delete('categories/:id')
    deleteCategory(@Param('id') id: string) {
        return this.resourceService.deleteCategory(id);
    }

    @Get('landing')
    getLandingPageData() {
        return this.resourceService.getLandingPageData();
    }

    @Get('featured')
    getFeaturedResources() {
        return this.resourceService.getFeaturedResources();
    }

    @Get('sectors')
    getTechSectors() {
        return this.resourceService.getTechSectors();
    }

    @Post()
    createResource(@Body() data: any) {
        return this.resourceService.createResource(data);
    }

    @Patch(':id')
    updateResource(@Param('id') id: string, @Body() data: any) {
        return this.resourceService.updateResource(id, data);
    }

    @Delete(':id')
    deleteResource(@Param('id') id: string) {
        return this.resourceService.deleteResource(id);
    }
}
