import { Component } from '@angular/core';
import { DropDownListComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html'
})

export class HomeComponent {
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
}