import { Component } from '@angular/core';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TvShowListComponent {
  tvShows: any[] = [];

  constructor(public readonly service: TvshowsService) {}

  ngOnInit(): void {
    this.tvShows = this.service.getTvShows();
  }
}
