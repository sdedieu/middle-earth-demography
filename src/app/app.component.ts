import { Component } from '@angular/core';

@Component({
  selector: 'mhd-root',
  template: `
  <lib-the-one-portal-shell>
    <router-outlet></router-outlet>
  </lib-the-one-portal-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
