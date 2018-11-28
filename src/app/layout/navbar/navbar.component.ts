import { Component } from '@angular/core';

import { AuthenticationService } from '../../service/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'CampFire';
  isNavbarCollapsed = true;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) {}
  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }
  goBookmark() {
    this.router.navigate(['/home/bookmark']);
  }
}
