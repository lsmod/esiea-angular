import { Component, Input } from '@angular/core';
import { TvShowModel } from '../model/TvShow';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css'],
  imports: [RouterLink, MatCardModule, MatChipsModule, CommonModule],
})
export class TvShowItemComponent {
  @Input() tvShow!: TvShowModel;
}
