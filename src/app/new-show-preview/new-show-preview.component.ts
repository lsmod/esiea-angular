import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-new-show-preview',
  templateUrl: './new-show-preview.component.html',
  styleUrls: ['./new-show-preview.component.css'],
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
