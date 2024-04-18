import { Injectable } from '@angular/core';
import { tvshows as hardcodedTvShow } from './tvshows';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private tvShows = hardcodedTvShow;

  getTvShow() {
    return this.tvShows;
  }
}
