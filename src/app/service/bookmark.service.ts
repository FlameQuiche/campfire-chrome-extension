import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, pipe } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Configuration } from '../app.constants';

import {Bookmark} from "../domain/bookmark";

@Injectable({ providedIn: 'root' })
export class BookmarkService {
    constructor(private http: HttpClient, private configuration: Configuration) {}

    getBookmarks(query: string): Observable<Bookmark[]> {
        return this.http.get<Bookmark[]>(this.configuration.serverWithApiUrl + (query ? '/bookmarks?query=' + query : '/bookmarks'));
    }
}
