import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../tvshows.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css'],
  imports: [CommonModule],
})
export class SeasonDetailComponent implements OnInit {
  espiodes: any[] = [];
  tvShow: any;
  seasonNumber: number | undefined;

  constructor(
    private readonly tvShowService: TvshowsService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const tvShowId = this.route.snapshot.paramMap.get('tvShowId');
    const seasonId = this.route.snapshot.paramMap.get('seasonId');
    this.seasonNumber = this.tvShowService.getSeasonById(
      Number(seasonId)
    )?.number;

    this.tvShow = this.tvShowService.getTvShowById(Number(tvShowId));
    this.espiodes = this.tvShowService.getEpisodes(
      Number(tvShowId),
      Number(seasonId)
    );

    console.log('episodes: ', this.espiodes);
  }
}
