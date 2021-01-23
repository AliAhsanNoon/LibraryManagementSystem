import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule { }
