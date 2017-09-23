import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { jqxDropDownListComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist'

@NgModule({ declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    jqxDropDownListComponent],
  providers: [],
  bootstrap: [HomeComponent]
})

export class HomeModule {
// tslint:disable-next-line:eofline
}