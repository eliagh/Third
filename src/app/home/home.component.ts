import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownListComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html'
})

export class HomeComponent implements AfterViewInit {
  @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;

  ngAfterViewInit(): void {
      this.myDropDownList.createComponent(this.settings);
  }

  source: string[] =
  [
      'Affogato',
      'Americano',
      'Bicerin',
      'Breve',
      'Cafe Bombon',
      'Cafe au lait',
      'Caffe Corretto',
      'Cafe Crema',
      'Caffe Latte',
      'Caffe macchiato',
      'Cafe melange',
      'Coffee milk',
      'Cafe mocha',
      'Cappuccino',
      'Carajillo',
      'Cortado',
      'Cuban espresso',
      'Espresso',
      'Eiskaffee',
      'The Flat White',
      'Frappuccino',
      'Galao',
      'Greek frappe coffee',
      'Iced Coffee',
      'Indian filter coffee',
      'Instant coffee',
      'Irish coffee',
      'Liqueur coffee'
  ];

  settings: jqwidgets.DropDownListOptions =
  {
      source: this.source, selectedIndex: 1, width: '200', height: '25'
  }
}