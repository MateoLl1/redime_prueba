import type { Category } from './Category';

export interface Material {
  id: number;
  name: string;
  description: string;
  minimum_stock: number;
  category_id: number;
  category?: Category;
  created_at: string;
}
