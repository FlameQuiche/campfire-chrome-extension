import { Component, OnInit } from '@angular/core';

import { User } from '../domain/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  user: User;

  ngOnInit() {
  }
}