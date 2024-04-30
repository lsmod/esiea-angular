import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvshowsService } from '../tvshows.service';
import { TvShowModel } from '../model/TvShow';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TvShowListComponent implements OnInit, OnDestroy {
  tvShows: TvShowModel[] = [];
  error: string | null = null;
  interval: any;
  loading = true;
  newTitle = 'nouveau';
  newDescription = 'blabla';

  constructor(public readonly service: TvshowsService) {}

  // called when the component is initialized
  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    console.log('ngOnInit');
    this.service.getTvShows().subscribe((shows) => {
      this.tvShows = shows;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    console.log('newDescription', this.newDescription);
    console.log('ngOnDestroy');
    clearInterval(this.interval);
  }
}
