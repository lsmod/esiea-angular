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
  loading = true;
  constructor(public readonly service: TvshowsService) {}

  // called when the component is initialized
  ngOnInit(): void {
    console.log('ngOnInit');
    this.service.getTvShows().subscribe((shows) => {
      this.tvShows = shows;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
