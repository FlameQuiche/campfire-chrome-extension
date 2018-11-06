import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public server = 'http://localhost:8080';
  public apiUrl = '/api/';
  public serverWithApiUrl = this.server + this.apiUrl;
}
