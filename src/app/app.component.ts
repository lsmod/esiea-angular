import { Component, OnInit } from '@angular/core';
import { TvshowsService } from './tvshows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tvShows: any[] = [];

  constructor(public readonly service: TvshowsService) {}
}
