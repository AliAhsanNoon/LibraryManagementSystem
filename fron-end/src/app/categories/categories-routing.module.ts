import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookResolver } from '../resolvers/books-resolver/book-resolver';

import { CategoriesComponent } from './categories.component';

const routes: Routes = [{
  path: 'listing', component: CategoriesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
