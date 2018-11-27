import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
import { BookmarkService } from '../service/bookmark.service';
import { User } from '../domain/user';
import { Bookmark } from '../domain/bookmark';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  user: User;
  bookmarks: Bookmark[];

  constructor(private userService: UserService, private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser()
    .subscribe(user => this.user = user);
  }
}
