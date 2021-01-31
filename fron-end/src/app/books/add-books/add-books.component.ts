import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/models/IBooks';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})

export class AddBooksComponent implements OnInit {

  catSelectedValue: string;
  authorSelectedValue: string;
  categoriesList: any;
  authorList: any;
  saveBookForm: FormGroup;
  id: any;
  book: Book;

  constructor(private service: BooksService, private route: ActivatedRoute) {
    const authorResolved: any | string = this.route.snapshot.data['authorList'];
    const categoriesResolved: any | string = this.route.snapshot.data['categoriesList'];
    if (Array.isArray(categoriesResolved)) {
      this.categoriesList = categoriesResolved;
    }
    if (Array.isArray(authorResolved)) {
      this.authorList = authorResolved;
    }
  }

  onBookFormSubmit(saveBookForm: NgForm) {
    if (this.id != null) {
      this.book = saveBookForm.value;
      this.book.id = this.id;
      this.service.updateBooksRecord(this.book).subscribe(res => console.log('Book Updated Successfully', res));
    } else {
      this.service.saveBooks(saveBookForm.value).subscribe(res => console.log('Getting Result After saving record', res));

    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    this.saveBookForm = this.service.setupBookForm();

    if (this.id != null) {
      this.service.getBookDetailsById(this.id).subscribe((res) => {
        this.book = res;
        this.saveBookForm.patchValue(this.book);
      });
    }
  }

}