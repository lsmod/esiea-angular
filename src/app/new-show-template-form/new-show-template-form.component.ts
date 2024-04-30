import { Component } from '@angular/core';

@Component({
  selector: 'app-new-show-template-form',
  templateUrl: './new-show-template-form.component.html',
  styleUrls: ['./new-show-template-form.component.css'],
})
export class NewShowTemplateFormComponent {
  name = 'new show';
  description = 'new show description';

  onSubmit(): void {
    console.log('name', this.name);
    console.log('description', this.description);

    // this.tvShowService.createTvShow({
    //   name: this.name,
    //   description: this.description,
    // });
  }
}