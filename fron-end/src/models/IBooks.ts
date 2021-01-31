import { Author } from './IAuthor';
import { Category } from './ICategory';
export interface Book {
    id: Number;
    isDeleted: boolean;
    bookTitle: string;
    price: Number;
    qty: Number;
    bookDescription: string;

    categoryId?: Number;
    category: Category;
    authorId?: Number;
    author: Author;
}