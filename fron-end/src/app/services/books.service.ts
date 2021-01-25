import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from 'src/models/IBooks';
import { ApiClientService } from '../shared/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookForm: NgForm;

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
  setupBookForm(): FormGroup {

    return this.fb.group({
      BookTitle: ['', Validators.required],
      BookPrice: [0, Validators.required],
      Qty: [0, Validators.required],
      BookDescription: ['',],
      CategoryId: [null],
      AuthorId: [null]
    })
  }
}
