import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public server = 'https://dev-campfire.herokuapp.com/';
  public apiUrl = 'api';
  public serverWithApiUrl = this.server + this.apiUrl;
}
