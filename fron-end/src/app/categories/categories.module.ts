import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SaveCategoriesComponent } from './save-categories/save-categories.component';


@NgModule({
  declarations: [CategoriesComponent, SaveCategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModuleModule
  ]
})
export class CategoriesModule { }
