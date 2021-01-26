import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { of } from 'rxjs';
import { Book } from 'src/models/IBooks';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: Book[];
  errorMsg: any;
  displayedColumns: string[] = ['id', 'bookTitle', 'category', 'author', 'price', 'qty', 'actions'];
  constructor(private servie: BooksService, private route: ActivatedRoute, private router: Router) {

    const resolvedData: Book[] | string = this.route.snapshot.data['books'];

    if (Array.isArray(resolvedData)) {
      this.bookList = resolvedData;
    } else {
      this.errorMsg = resolvedData;
      
    }
  }
  navigateToAddBooks() {
    this.router.navigate(['/books/add-book']);
  }
  delBook(id) {
    let bookObj = {
      "Id": id,
      "IsDeleted": true
    };
    this.servie.deleteBooks(bookObj).subscribe(res => {
      this.servie.getBooksList().subscribe(booksList => console.log('booklist', this.bookList = booksList))
    })
  }

  ngOnInit(): void {
  }

}
