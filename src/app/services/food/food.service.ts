import { Injectable } from '@angular/core';
import { Food, Tag } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Vegetable Pizza',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['pakistani'],
        stars: 4.9,
        imageUrl: '/assets/food-1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 2,
        name: 'Jelapino Burger',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['italian'],
        stars: 4.1,
        imageUrl: '/assets/food-2.jpg',
        tags: ['fastfood', 'burger', 'lunch', 'dinner'],
      },
      {
        id: 3,
        name: 'Saucy Fries',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['german'],
        stars: 4.0,
        imageUrl: '/assets/food-3.jpg',
        tags: ['fastfood', 'fries', 'lunch'],
      },
      {
        id: 4,
        name: 'Meat Burger',
        price: 15,
        cookTime: '20-30',
        favorite: false,
        origins: ['persian', 'middle east'],
        stars: 4.7,
        imageUrl: '/assets/food-4.jpg',
        tags: ['fastfood', 'burger', 'lunch'],
      },
      {
        id: 5,
        name: 'Spicy Saucy Pizza',
        price: 10,
        cookTime: '15-20',
        favorite: false,
        origins: ['german', 'italian'],
        stars: 4.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 6,
        name: 'Saucy Cheesy Pizza',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['pakistani', 'italian'],
        stars: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 7,
        name: 'Layered Spicy Noodles',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['china', 'german'],
        stars: 3.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['fastfood', 'noodles', 'lunch', 'dinner'],
      },
      {
        id: 8,
        name: 'Club Sandwich & Garlic Fries',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['pakistani'],
        stars: 4.0,
        imageUrl: '/assets/food-8.jpg',
        tags: ['fastfood', 'sandwich', 'lunch'],
      },
    ];
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', value: 'all', count: this.getAll().length },
      { name: 'Fast Food', value: 'fastfood', count: 8 },
      { name: 'Lunch', value: 'lunch', count: 8 },
      { name: 'Dinner', value: 'dinner', count: 2 },
      { name: 'Sandwich', value: 'sandwich', count: 1 },
      { name: 'Noodles', value: 'noodles', count: 1 },
      { name: 'Burger', value: 'burger', count: 2 },
      { name: 'Fries', value: 'fries', count: 1 },
    ];
  }

  getAllFoodByTag(tag: string): Food[] {
    if (tag === 'all') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) =>
        food.tags?.includes(tag.toLowerCase())
      );
    }
  }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id === +id)!;
  }
}
