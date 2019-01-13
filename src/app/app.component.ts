import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fiki';
  activeMilestone = 0;
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setActiveMilestone(activeMilestone : any) {
    this.activeMilestone = activeMilestone;
    if(this.navbarOpen === true) {
      this.toggleNavbar();
    }
  }
}
