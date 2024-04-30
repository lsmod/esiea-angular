import { Injectable } from '@angular/core';
import { tvshows as hardcodedTvShow } from './tvshows';
import { episodes } from './episodes';
import { seasons } from './seasons';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private tvShows = hardcodedTvShow;
  private selectedTvShow = null;

  constructor(private readonly httpClient: HttpClient) {}

  async getTvShows() {
    return this.httpClient.get('https://api.tvmaze.com/shows').toPromise();
  }

  getSeasons(tvShowId: number) {
    // TODO: make an API call instead of returning hardcoded array
    // (GET https://api.tvmaze.com/shows/id/seasons)
    return seasons;
  }

  getSeasonById(seasonId: number) {
    return seasons.find((season) => season.id === seasonId);
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
