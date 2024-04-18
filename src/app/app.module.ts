import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TvShowItemComponent } from './tv-show-item/tv-show-item.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

const routes: Route[] = [
  { path: '', component: TvShowListComponent },
  { path: 'tshow-details/:id', component: TvShowDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TvShowItemComponent,
    TvShowListComponent,
    TvShowDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
