import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-new-show-preview',
  templateUrl: './new-show-preview.component.html',
  styleUrls: ['./new-show-preview.component.css'],
  imports: [CommonModule],
})
export class NewShowPreviewComponent implements OnChanges {
  @Input() title: string = '';
  loading = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['title'].firstChange) {
      this.loading = true;
    }

    // todo let's call an API to generate a preview
  }
}
