import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
