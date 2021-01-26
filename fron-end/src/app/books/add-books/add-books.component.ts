import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  val: Book;

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
    this.service.saveBooks(saveBookForm.value).subscribe(res => console.log('Getting Result After saving record', res));
  }

  ngOnInit(): void {
    this.saveBookForm = this.service.setupBookForm();
    
    if (this.route.snapshot.paramMap.get('Id') != null) {
      
      this.service.getBookDetailsById(4).subscribe(res => {
        this.val = res as Book;
        console.log('Getting RequestById', this.val);
        // this.saveBookForm.valu
        
        this.saveBookForm.setValue(res);
        console.log('2', this.saveBookForm);
      });
    }else{
      this.saveBookForm = this.service.setupBookForm();
    }
  }

}
