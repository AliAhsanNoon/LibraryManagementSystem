import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
