import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BooksComponent, AddBooksComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
