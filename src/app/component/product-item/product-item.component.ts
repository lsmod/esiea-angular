import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Output() onSelect = new EventEmitter();
  @Input() item: {
    title: string;
    description: string;
    selected: boolean;
  } = {
    title: '',
    description: '',
    selected: false,
  };

  emitOnSelect() {
    this.onSelect.emit({ ...this.item, selected: !this.item.selected });
  }
}
