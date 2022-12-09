import { Component } from '@angular/core';

@Component({
  selector: 'mhd-root',
  template: `
  <lib-portal-shell>
    <router-outlet></router-outlet>
  </lib-portal-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
