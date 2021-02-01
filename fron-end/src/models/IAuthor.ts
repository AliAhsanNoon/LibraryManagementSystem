// import { Books } from 'src/models/IBooks'

import { Book } from "./IBooks";

export interface Author {
    id: Number;
    isDeleted: boolean;
    authorName: string;
    dob: Date;
    emailAddress: string;
    phoneNo: string;
    city: string;
    residenceAddress: string;
    booksList: Book[]
}