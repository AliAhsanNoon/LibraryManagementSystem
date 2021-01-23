import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookResolver } from '../resolvers/book-resolver';
import { AddBooksComponent } from './add-books/add-books.component';

import { BooksComponent } from './books.component';

const routes: Routes = [ 
  {
    path: 'listing', component: BooksComponent,
    resolve: {
      books: BookResolver
    },
    children:[

    ]
  },

  {
    path: 'add-book', component: AddBooksComponent, pathMatch:'full'
  },
  {
    path:'', redirectTo:'listing'
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
