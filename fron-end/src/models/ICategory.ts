import { Book } from './IBooks'
export interface Category {
    categoryName: string;
    booksList: Book[];
    id: Number;
    isDeleted: boolean;
}