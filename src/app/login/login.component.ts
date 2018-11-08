import { Component, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login';
  login: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  doLogin() {
    this.authService.authenticate(this.login, this.password)
    .subscribe(res => console.log(res));
  }
}