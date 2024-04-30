import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { routes } from './routes';
import { NewShowComponent } from './new-show/new-show.component';
import { NewShowPreviewComponent } from './new-show-preview/new-show-preview.component';
import { NewShowTemplateFormComponent } from './new-show-template-form/new-show-template-form.component';
import { NewShowReactiveFormComponent } from './new-show-reactive-form/new-show-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowItemComponent,
    TvShowListComponent,
    TvShowDetailComponent,
    SeasonDetailComponent,
    NewShowComponent,
    NewShowPreviewComponent,
    NewShowTemplateFormComponent,
    NewShowReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
