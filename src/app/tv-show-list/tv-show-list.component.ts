import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TvShowListComponent {
  tvShows: any[] = [];
  error: string | null = null;
  loading = true;
  constructor(public readonly service: TvshowsService) {}

  // called when the component is initialized
  ngOnInit(): void {
    this.service
      .getTvShows()
      .then((data: any) => {
        this.tvShows = data;
        this.loading = false;
      })
      .catch((error) => {
        this.error = error.message;
        this.loading = false;
      });
  }
}
