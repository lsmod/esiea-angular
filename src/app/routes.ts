import { Route } from '@angular/router';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';

export const routes: Route[] = [
  { path: '', component: TvShowListComponent },
  { path: 'tshow-details/:id', component: TvShowDetailComponent },
  {
    path: 'tvshow-details/:tvShowId/season/:seasonId',
    component: SeasonDetailComponent,
  },
];
