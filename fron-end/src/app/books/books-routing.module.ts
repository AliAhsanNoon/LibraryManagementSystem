import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookResolver } from '../resolvers/book-resolver';

import { BooksComponent } from './books.component';

const routes: Routes = [{
  path: '', component: BooksComponent, resolve: {
    books: BookResolver
  }
}];

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
