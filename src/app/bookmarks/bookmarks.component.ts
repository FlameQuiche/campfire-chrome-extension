import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

import { BookmarkService } from '../service/bookmark.service';
import { User } from '../domain/user';
import { Bookmark } from '../domain/bookmark';
import { Tag } from '../domain/tag';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  user: User;
  bookmarks: Observable<Bookmark[]>;
  tags: Tag[] = new Array();
  searchBookmarks = new Subject<string>();

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarks = this.searchBookmarks.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => this.bookmarkService.getBookmarks(query)),
      switchMap((bookmarks: Bookmark[]) => this.getTags(bookmarks))
    );
    setTimeout(() => {
      this.search('');
    });
  }

  getBookmarks(query: string): void {
    this.bookmarkService.getBookmarks(query)
  }

  getTags(bookmarks): Observable<Bookmark[]> {
    this.tags = [];
    bookmarks.forEach((bookmark) => {
      if (bookmark.tags !== null && bookmark.tags.length > 0) {
        bookmark.tags.forEach((tagString) => {
          this.tags.forEach((tag) => {
            if (tag['name'] == tagString) {
              tag.count += 1;
              return;
            }
          })
          var tag: Tag = new Tag();
          tag.name = tagString;
          tag.count = 1;
          this.tags.push(tag);
        })
      }
    });
    return of(bookmarks);
  }

  search(query?: string): void {
    this.searchBookmarks.next(query);
  }
}