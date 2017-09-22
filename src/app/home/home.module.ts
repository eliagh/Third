import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DropDownListModule } from '../../../node_modules/jqwidgets-framework/jqwidgets/jqxdropdownlist.js'

@NgModule({ declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DropDownListModule],
  providers: [],
  bootstrap: [HomeComponent]
})

export class HomeModule { }