export interface MenuCategorySeed {
  id: string;
  name: string;
  sortOrder: number;
}

export interface MenuItemSeed {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  available: boolean;
  imageUrl: string;
  tags: string[];
}

export const menuCategories: MenuCategorySeed[] = [
  { id: 'coffee', name: 'Coffee', sortOrder: 1 },
  { id: 'non-coffee', name: 'Non-Coffee', sortOrder: 2 },
  { id: 'pastries', name: 'Pastries & Cakes', sortOrder: 3 },
];

export const menuItems: MenuItemSeed[] = [
  {
    id: '1',
    name: 'Espresso',
    description:
      'A concentrated shot of our house-blend beans, rich crema on top.',
    category: 'coffee',
    price: 3.0,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399861/espresso_zkn6ck.jpg',
    tags: ['vegan'],
  },
  {
    id: '2',
    name: 'Americano',
    description: 'Espresso topped with hot water for a lighter, smooth cup.',
    category: 'coffee',
    price: 3.5,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399866/americano_alb5hv.jpg',
    tags: ['vegan'],
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and velvety foam.',
    category: 'coffee',
    price: 4.0,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399865/cappuccino_lfilcl.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '4',
    name: 'Latte',
    description: 'Espresso with steamed milk and a light layer of foam.',
    category: 'coffee',
    price: 4.5,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399858/latte_zlvfig.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '5',
    name: 'Flat White',
    description: 'Double espresso with steamed milk, silky microfoam texture.',
    category: 'coffee',
    price: 4.5,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399858/latte_zlvfig.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '9',
    name: 'Matcha Latte',
    description: 'Ceremonial-grade matcha whisked with steamed milk.',
    category: 'non-coffee',
    price: 5.0,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399858/matcha-latte_kzntvw.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '10',
    name: 'Chai Latte',
    description: 'Spiced black tea concentrate with steamed milk.',
    category: 'non-coffee',
    price: 4.5,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399863/chai-latte_prvsty.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '11',
    name: 'Hot Chocolate',
    description: 'Rich house-made chocolate sauce with steamed milk.',
    category: 'non-coffee',
    price: 4.3,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399859/hot-chocolate_y1z2vj.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '12',
    name: 'Tea',
    description: 'A selection of loose-leaf teas.',
    category: 'non-coffee',
    price: 3.8,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399857/tea_baqh1e.jpg',
    tags: ['vegan'],
  },
  {
    id: '13',
    name: 'Butter Croissant',
    description: 'Classic French-style croissant, baked fresh daily.',
    category: 'pastries',
    price: 3.5,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399862/croissant_ilakhe.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '15',
    name: 'Banana Bread',
    description: 'Moist house-baked banana bread with a hint of cinnamon.',
    category: 'pastries',
    price: 4.0,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399865/banana-bread_qa1clm.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '16',
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with cream cheese frosting.',
    category: 'pastries',
    price: 5.0,
    available: false,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399864/carrot-cake_yolpwg.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '17',
    name: 'Chocolate Cake',
    description: 'Rich dark chocolate cake with ganache.',
    category: 'pastries',
    price: 5.2,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399863/chocolate-cake_n8olgr.jpg',
    tags: ['vegetarian'],
  },
  {
    id: '18',
    name: 'Oatmeal Cookie',
    description: 'Crunchy oatmeal cookie',
    category: 'pastries',
    price: 2.8,
    available: true,
    imageUrl:
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1784399858/oatmeal-cookie_pdwpwj.jpg',
    tags: ['vegan'],
  },
];
