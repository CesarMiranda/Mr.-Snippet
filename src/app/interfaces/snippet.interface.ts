import { Category } from './category.interface';
export interface Snippet {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  userId: number;
  categories?: Array<Category>;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
