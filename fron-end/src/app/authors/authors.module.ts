import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SaveAuthorComponent } from './save-author/save-author.component';


@NgModule({
  declarations: [AuthorsComponent, SaveAuthorComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModuleModule
  ]
})
export class AuthorsModule { }
