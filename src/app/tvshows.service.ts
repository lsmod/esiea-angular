import { Injectable } from '@angular/core';
import { episodes } from './episodes';
import { seasons } from './seasons';
import { HttpClient } from '@angular/common/http';
import { TvShowModel } from './model/TvShow';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private tvShows: any[] = [];
  private selectedTvShow = null;

  constructor(private readonly httpClient: HttpClient) {}

  getTvShows() {
    const observable = this.httpClient.get<TvShowModel[]>(
      'https://api.tvmaze.com/shows'
    );
    observable.subscribe((shows) => {
      this.tvShows = shows;
    });
    return observable;
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
