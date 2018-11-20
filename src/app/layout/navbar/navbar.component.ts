import { Component } from '@angular/core';

import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'CampFire';
  isNavbarCollapsed=true;

  constructor(private authenticationService: AuthenticationService) {}
  
  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }
}