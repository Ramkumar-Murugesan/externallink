import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
AgGridModule
],
  declarations: [
  PopupComponent
],
  exports: [
PopupComponent
]
})
export class PopupModule { }