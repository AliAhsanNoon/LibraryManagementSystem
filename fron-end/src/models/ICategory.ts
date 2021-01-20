import { Book } from './IBooks'
export interface Category {
    Id: Number;
    IsDeleted: boolean;
    CategoryName: string;
    BooksList: Book[];
}