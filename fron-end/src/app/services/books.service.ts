import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from 'src/models/IBooks';
import { ApiClientService } from '../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private api: ApiClientService, private fb: FormBuilder) { }
  getBooksList(): Observable<Book[]> {
    return this.api.get('books/bookslist');
  }
  loadAuthors(): Observable<any> {
    return this.api.get('author/authorlist');
  }
  loadCategories(): Observable<any> {
    return this.api.get('categories/categorieslist');
  }
  saveBooks(data: Book): Observable<any> {
    return this.api.post('books/savebook', data);
  }
  getBookDetailsById(Id: any): Observable<any> {
    return this.api.getById('books/BookById', Id);
  }
  updateBooksRecord(data: Book): Observable<boolean> {
    return this.api.update('books/UpdateBook', data);
  }
  deleteBooks(Id: any): Observable<Book> {
    return this.api.delete('books/DeleteBook', Id);
  }
  setupBookForm(): FormGroup {
    return this.fb.group({
      bookTitle: ['', Validators.required],
      price: [0, Validators.required],
      qty: [0, Validators.required],
      bookDescription: ['',],
      categoryId: [null],
      authorId: [null]
    });

  }

}
