import { Component, OnInit } from '@angular/core';
import { TvshowsService } from './tvshows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tvShows: any[] = [];
  constructor(private readonly service: TvshowsService) {}

  ngOnInit(): void {
    this.tvShows = this.service.getTvShows();
  }
}
