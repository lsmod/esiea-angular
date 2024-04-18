import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  async getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ name: 'Arno' }, { name: 'John' }]);
      }, 300);
    });
  }
}
