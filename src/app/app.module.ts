import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TvShowItemComponent } from './tv-show-item/tv-show-item.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: '', component: TvShowListComponent },
  { path: 'tshow-details/:id', component: TvShowDetailComponent },
  {
    path: 'tvshow-details/:tvShowId/season/:seasonId',
    component: SeasonDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TvShowItemComponent,
    TvShowListComponent,
    TvShowDetailComponent,
    SeasonDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
