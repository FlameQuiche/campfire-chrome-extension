import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
import { BookmarkService } from '../service/bookmark.service';
import { User } from '../domain/user';
import { Bookmark } from '../domain/bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  title = 'bookmark';
  user: User;
  bookmarks: Bookmark[];

  constructor(private userService: UserService, private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.getUser();
    this.getBookmarks();
  }

  getUser(): void {
    this.userService.getUser()
    .subscribe(user => this.user = user);
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }
}
