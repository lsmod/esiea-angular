import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-new-show-reactive-form',
  templateUrl: './new-show-reactive-form.component.html',
  styleUrls: ['./new-show-reactive-form.component.css'],
  imports: [ReactiveFormsModule],
})
export class NewShowReactiveFormComponent implements OnInit {
  description = new FormControl('new show description');

  newShowGroup = new FormGroup({
    title: new FormControl('titre', Validators.required),
    description: new FormControl(
      'new show description',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ])
    ),
  });

  ngOnInit(): void {
    this.newShowGroup.valueChanges.subscribe((value) => {
      console.log('new title: ', value.title);
      console.log('new description:', value.description);
    });
  }

  onSubmit() {
    const value = this.newShowGroup.value;
    console.log('title', value.title);
    console.log('description', value.description);

    // TODO : POST ON /api/tv-shows
  }
}
