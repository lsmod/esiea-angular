import { Injectable } from '@angular/core';
import { tvshows as hardcodedTvShow } from './tvshows';
import { episodes } from './episodes';
import { seasons } from './seasons';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private tvShows = hardcodedTvShow;
  private selectedTvShow = null;

  getTvShows() {
    // TODO: make an API call instead of returning hardcoded array
    // (GET https://api.tvmaze.com/shows)
    return this.tvShows;
  }

  getSeasons(tvShowId: number) {
    // TODO: make an API call instead of returning hardcoded array
    // (GET https://api.tvmaze.com/shows/id/seasons)
    return seasons;
  }

  getEpisodes(tvShowId: number, seasonNumber: number) {
    // TODO: make an API call instead of returning hardcoded array
    // (GET https://api.tvmaze.com/seasons/1/episodes)
    return episodes;
  }

  getTvShowById(id: number) {
    for (const show of this.tvShows) {
      if (show.id === id) {
        return show;
      }
    }
    return null;
  }

  getSelectedTvShow() {
    return this.getSelectedTvShow;
  }

  setSelectedShow(show: any) {
    this.selectedTvShow = show;
  }
}
