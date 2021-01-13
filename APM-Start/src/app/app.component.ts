import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <pm-devices></pm-devices>
  </div>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
