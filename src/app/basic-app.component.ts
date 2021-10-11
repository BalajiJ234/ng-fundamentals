import { Component } from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
  <h2>Hello World</h2>
  <img src="/assets/images/basic-shield.png" alt="image"/>
  `,
})
export class BasicAppComponent {
  title = 'ng-fundamentals';
}
