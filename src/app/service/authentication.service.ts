import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Configuration } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient, private configuration: Configuration) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.configuration.serverWithApiUrl}/authenticate`, { username, password })
            .pipe(map((res: HttpResponse<any>) => {
                console.log(res['id_token']);
                // login successful if there's a jwt token in the response
                if (res['id_token']) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('id_token', JSON.stringify(res['id_token']));
                }
                return res;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('id_token');
    }
}