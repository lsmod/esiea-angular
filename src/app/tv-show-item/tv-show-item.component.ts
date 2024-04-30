import { Component, Input } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import { TvShowModel } from '../model/TvShow';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css'],
})
export class TvShowItemComponent {
  @Input() tvShow!: TvShowModel;
}
