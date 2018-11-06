import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from './app.constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class APIService {

    private actionUrl: string;

    constructor(private httpClient: HttpClient, private configuration: Configuration) {
      this.actionUrl = configuration.server;
    }

    getUsers() {
        return this.httpClient.get(this.actionUrl + '/api/users');
    }
}
