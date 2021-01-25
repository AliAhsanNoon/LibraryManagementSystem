import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

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

  onBookFormSubmit(saveBookForm: any) {
    console.log('Form', saveBookForm.value);
    this.service.saveBooks(saveBookForm.value).subscribe(res => console.log('Getting Result After saving record', res));
  }

  ngOnInit(): void {
    this.saveBookForm = this.service.setupBookForm();
  }

}
