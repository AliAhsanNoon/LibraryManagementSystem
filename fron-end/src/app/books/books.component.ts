import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { of } from 'rxjs';
import { Book } from 'src/models/IBooks';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: any;
  errorMsg: any;
  constructor(private servie: BooksService, private route: ActivatedRoute) {

    const resolvedData: Book[] | string = this.route.snapshot.data['books'];

    if (Array.isArray(resolvedData)) {
      this.bookList = resolvedData;

    } else {
      this.errorMsg = resolvedData;
    }
  }

  ngOnInit(): void {
  }

}
