class Food {
  id!: number;
  price!: number;
  name!: string;
  favorite: boolean = false;
  stars: number = 0;
  tags?: string[];
  imageUrl!: string;
  cookTime!: string;
  origins!: string[];
}

export default Food;
