import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvshowsService } from '../tvshows.service';
import { TvShowModel } from '../model/TvShow';
import { NewShowComponent } from '../new-show/new-show.component';
import { NewShowPreviewComponent } from '../new-show-preview/new-show-preview.component';
import { NewShowReactiveFormComponent } from '../new-show-reactive-form/new-show-reactive-form.component';
import { NewShowTemplateFormComponent } from '../new-show-template-form/new-show-template-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TvShowItemComponent } from '../tv-show-item/tv-show-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
  imports: [
    NewShowComponent,
    NewShowPreviewComponent,
    TvShowItemComponent,
    NewShowReactiveFormComponent,
    NewShowTemplateFormComponent,
    MatGridListModule,
    FormsModule,
    CommonModule,
  ],
})
export class TvShowListComponent implements OnInit, OnDestroy {
  tvShows: TvShowModel[] = [];
  error: string | null = null;
  interval: any;
  loading = true;
  newTitle = 'nouveau';
  newDescription = 'blabla';

  constructor(public readonly service: TvshowsService) {}

  // called when the component is initialized
  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    console.log('ngOnInit');
    this.service.getTvShows().subscribe((shows) => {
      this.tvShows = shows;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    console.log('newDescription', this.newDescription);
    console.log('ngOnDestroy');
    clearInterval(this.interval);
  }
}
