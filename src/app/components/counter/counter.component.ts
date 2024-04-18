import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  dec() {
    this.count--;
    this.countChange.emit(this.count);
  }

  inc() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
