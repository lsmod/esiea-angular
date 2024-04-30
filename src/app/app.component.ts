import { Component, OnInit } from '@angular/core';
import { TvshowsService } from './tvshows.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewShowComponent } from './new-show/new-show.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    NewShowComponent,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    CdkAccordionModule,
  ],
})
export class AppComponent {
  tvShows: any[] = [];

  constructor(public readonly service: TvshowsService) {}
}
