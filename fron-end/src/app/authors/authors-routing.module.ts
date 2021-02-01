import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors.component';
import { SaveAuthorComponent } from './save-author/save-author.component';

const routes: Routes = [
  { path: 'listing', component: AuthorsComponent },
  { path: 'save-author', component: SaveAuthorComponent },
  { path: 'save-author/:id', component: SaveAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
