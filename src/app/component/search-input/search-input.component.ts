import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Input() query: string = '';
  @Output() queryChange = new EventEmitter<string>();

  onChangeSearchParam($event: any) {
    this.queryChange.emit($event.target.value);
    console.log('event value:', $event.target.value);
  }
}
