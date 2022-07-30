import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ ListComponent],
  imports: [BrowserModule,FormsModule],
})
export class AppRoutingModule { }