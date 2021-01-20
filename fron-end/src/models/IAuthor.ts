// import { Books } from 'src/models/IBooks'

import { Book } from "./IBooks";

export interface Author {
    Id: Number;
    IsDeleted: boolean;
    AuthorName: string;
    DOB: Date;
    EmailAddress: string;
    PhoneNo: string;
    City: string;
    ResidenceAddress: string;
    BooksList: Book[]
}