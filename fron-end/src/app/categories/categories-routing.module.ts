import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookResolver } from '../resolvers/books-resolver/book-resolver';

import { CategoriesComponent } from './categories.component';
import { SaveCategoriesComponent } from './save-categories/save-categories.component';

const routes: Routes = [{
  path: 'listing', component: CategoriesComponent
},
{
  path: 'save-categories', component: SaveCategoriesComponent
}
  ,
{
  path: 'save-categories/:id', component: SaveCategoriesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
