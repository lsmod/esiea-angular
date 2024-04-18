import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
})
export class TvShowDetailComponent implements OnInit {
  // service.getTvShowById(id)
  tvShow: any;
  seasons: any[] = [];

  constructor(
    private readonly tvShowService: TvshowsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tvShow = this.tvShowService.getTvShowById(Number(id));
    this.seasons = this.tvShowService.getSeasons(Number(id));
  }
}
