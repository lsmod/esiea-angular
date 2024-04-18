import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Arno';
  buttonText = 'show';
  isEmailEnabled = false;

  initialCount = 19;
  initialCountStyle = {
    color: this.initialCount > 18 ? 'green' : 'red',
    'font-weight': 'bold',
  };
  countries = ['fr', 'en', 'be', 'pl', 'sn', 'ru'];
  selectedCountry = this.countries[2];

  displayName() {
    console.log(this.name);
    return this.name;
  }

  loop() {
    for (const country of this.countries) {
      console.log(country);
    }
  }
}
