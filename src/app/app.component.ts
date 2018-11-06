import {Component, OnInit} from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';
  private users: Array<object> = [];

  constructor(private  apiService:  APIService) { }
  ngOnInit() {
    this.getUsers();
  }
  public getUsers() {
    this.apiService.getUsers().subscribe((data:  Array<object>) => {
      this.users  =  data;
      console.log(data);
    });
  }
}
