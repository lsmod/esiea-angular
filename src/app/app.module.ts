import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TvShowItemComponent } from './tv-show-item/tv-show-item.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';

const routes: Route[] = [{ path: '', component: TvShowListComponent }];

@NgModule({
  declarations: [AppComponent, TvShowItemComponent, TvShowListComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
