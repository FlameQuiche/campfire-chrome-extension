import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from '../app.constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

    private actionUrl: string;
    private token: string;

    constructor(private http: HttpClient, private configuration: Configuration) {
      //this.actionUrl = configuration.serverWithApiUrl + 'values/';
    }

    getRetrieveUser() {

    }

    authenticate(login: string, password: string) {
        return this.http.post('https://dev-campfire.herokuapp.com/api/authenticate', {username: login, password: password}).pipe(
            map((res: HttpResponse<any>) => {
                this.token = res.body.id_token;
                return res;
            })
        );
    }

    getToken() {
        return this.token;
    }

    getUserData(token: string) {
        return this.http.get('/api/account');
    }
}