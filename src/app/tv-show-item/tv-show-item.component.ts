import { Component, Input } from '@angular/core';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css'],
})
export class TvShowItemComponent {
  @Input() tvShow: any;

  constructor(private readonly tvShowService: TvshowsService) {}

  onClick() {
    this.tvShowService.setSelectShow(this.tvShow);
  }
}
