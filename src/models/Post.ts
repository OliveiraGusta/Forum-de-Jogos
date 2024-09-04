import Category from './Category';
import User from './User';

export default interface Post {
  id: number;
  title: string;
  text: string;
  date: string;
  category: Category | null;
  user: User | null;
}