import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
import { User } from '../domain/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser()
    .subscribe(user => this.user = user);
  }
}