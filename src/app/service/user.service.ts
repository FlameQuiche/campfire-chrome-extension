import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration } from '../app.constants';

import { User } from '../domain/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private configuration: Configuration) { }

    getData() {
        return this.http.get<User>(`${this.configuration.serverWithApiUrl}/account`);
    }
}