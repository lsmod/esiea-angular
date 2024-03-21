import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  footerText = '';
  clickOnItem(productEvent: any) {
    for (const item of this.products) {
      if (productEvent.id === item.id) {
        item.selected = productEvent.selected;
      }
    }
    console.log('selected item:', productEvent);
    console.log('updated product list', this.products);

    this.footerText = 'footer';
  }

  products = [
    {
      id: 1,
      title: 'Awesome product',
      description: 'awesome description',
      selected: false,
    },
    {
      id: 2,
      title: 'a product',
      description: 'a description',
      selected: false,
    },
    {
      id: 3,
      title: 'some product',
      description: 'some description',
      selected: false,
    },
    {
      id: 4,
      title: 'low product',
      description: '',
      selected: false,
    },
  ];
}
