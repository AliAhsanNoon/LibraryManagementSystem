import { Author } from './IAuthor';
import { Category } from './ICategory';
export interface Book {
    Id: Number;
    IsDeleted: boolean;
    BookTitle: string;
    Price: Number;
    Qty: Number;
    BookDescription: string;

    CategoryId?: Number;
    Category: Category;
    AuthorId?: Number;
    Author: Author
}