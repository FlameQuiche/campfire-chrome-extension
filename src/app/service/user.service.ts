import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Configuration } from '../app.constants';

import { User } from '../domain/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private configuration: Configuration) {}

    getUser(): Observable<User> {
        return this.http.get<User>(this.configuration.serverWithApiUrl+'/account');
    }
}