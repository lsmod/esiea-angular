import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css'],
  standalone: true,
})
export class NewShowComponent {
  @Input() title: string = '';
  @Output() titleChange = new EventEmitter<string>();

  onTitleChange(event: any): void {
    this.titleChange.emit(event.target.value);
  }
}
