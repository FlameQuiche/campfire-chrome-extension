import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './app.constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {

    private actionUrl: string;

    constructor(private http: HttpClient, private configuration: Configuration) {
      this.actionUrl = configuration.serverWithApiUrl + 'values/';
    }

    getUsers() {
        return this.http.get('/api/users');
    }
}
