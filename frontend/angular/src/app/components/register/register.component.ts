import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerRegistrationRequest} from "../../models/customer-registration-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMsg = '';
  customer: CustomerRegistrationRequest = {};

  constructor(
    private router: Router
  ) {
  }



  login() {
    this.router.navigate(['login'])
  }
}
