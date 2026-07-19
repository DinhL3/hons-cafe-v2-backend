import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface MenuCategoryDto {
  id: string;
  name: string;
  sortOrder: number;
}

export interface MenuItemDto {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  available: boolean;
  imageUrl: string;
  tags: string[];
}

export interface MenuDto {
  categories: MenuCategoryDto[];
  items: MenuItemDto[];
}

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async getMenu(): Promise<MenuDto> {
    const [categories, items] = await Promise.all([
      this.prisma.category.findMany({ orderBy: { sortOrder: 'asc' } }),
      this.prisma.menuItem.findMany({ orderBy: { name: 'asc' } }),
    ]);

    return {
      categories,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        category: item.categoryId,
        price: item.price.toNumber(),
        available: item.available,
        imageUrl: item.imageUrl,
        tags: item.tags,
      })),
    };
  }
}
