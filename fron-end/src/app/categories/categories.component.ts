import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/models/IBooks';
import { Category } from 'src/models/ICategory';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'categoryName', 'bookList', 'actions'];
  errorMsg: any;
  bookSelectedValue: string;
  categoriesList: Category[];
  bookList: Book[];
  saveCategoriesForm: FormGroup;

  constructor(private service: CategoriesService, private activatedRoute: ActivatedRoute) {
    const bookResolved: any | string = this.activatedRoute.snapshot.data['books'];
    if (Array.isArray(bookResolved)) {
      this.bookList = bookResolved;
      console.log('BookResolved', this.bookList);

    } else {
      this.errorMsg = bookResolved;
    }
  }

  ngOnInit(): void {
    this.service.getCategoriesList().subscribe(res => this.categoriesList = res);
  }

  navigateToAddBooks() {
    //this.router.navigate(['/books/add-book']);
  }
  navigateToEditBooks(Id: any) {
    //this.router.navigate(['/books/add-book/', Id]);
  }
  delBook(id) {
    let bookObj = {
      "Id": id,
      "IsDeleted": true
    };
    // this.servie.deleteBooks(bookObj).subscribe(res => {
    //   this.servie.getBooksList().subscribe(booksListResp => this.bookList = booksListResp);
    // })
  }

}
