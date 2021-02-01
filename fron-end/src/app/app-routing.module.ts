import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },

{ path: 'auhtors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) },

{ path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
