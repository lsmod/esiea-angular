import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
  imports: [RouterLink, CommonModule],
})
export class TvShowDetailComponent implements OnInit {
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
