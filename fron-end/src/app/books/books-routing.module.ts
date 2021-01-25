import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListResolver } from '../resolvers/auhtor-resolver/auhtor-list-resolver';

import { BookResolver } from '../resolvers/books-resolver/book-resolver';
import { CatgeoriesListResolver } from '../resolvers/categories-list-resolver/categories-list-resolver';
import { AddBooksComponent } from './add-books/add-books.component';

import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: 'listing', component: BooksComponent,
    resolve: {
      books: BookResolver
    }
  },

  {
    path: 'add-book', component: AddBooksComponent, pathMatch: 'full',
    resolve: {
      authorList: AuthorListResolver,
      categoriesList: CatgeoriesListResolver
    }
  },
  {
    path: '', redirectTo: 'listing'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [
    BookResolver
  ]
})
export class BooksRoutingModule { }
