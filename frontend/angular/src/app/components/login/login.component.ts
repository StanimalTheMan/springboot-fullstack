import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authenticationRequest: AuthenticationRequest = {};
  errorMsg = '';

  constructor(
    private authenticationService: AuthenticationService
  ) {}
  login() {
    this.errorMsg = '';
    this.authenticationService.login(this.authenticationRequest)
      .subscribe({
        next: (authenticationResponse) => {
          console.log(authenticationResponse);
        },
        error: (err) => {
          this.errorMsg = 'Login and / or password is incorrect';
        }
      });
  }
}
