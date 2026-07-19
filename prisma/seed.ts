import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { menuCategories, menuItems } from './seed-data';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  for (const category of menuCategories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: category,
      create: category,
    });
  }

  for (const { category, ...item } of menuItems) {
    await prisma.menuItem.upsert({
      where: { id: item.id },
      update: { ...item, categoryId: category },
      create: { ...item, categoryId: category },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
