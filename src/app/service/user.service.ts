import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, pipe } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Configuration } from '../app.constants';

import { User } from '../domain/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private configuration: Configuration) {}

    getUser(): Observable<User> {
        //console.log(localStorage.getItem('id_token'));
        return this.http.get<User>(this.configuration.serverWithApiUrl+'/account');
    }
}