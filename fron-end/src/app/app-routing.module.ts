import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) }

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
