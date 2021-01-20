import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/models/IBooks';
import { ApiClientService } from '../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private api: ApiClientService) { }
  getBooksList(): Observable<Book[]> {
    return this.api.get('books/bookslist');
  }
}