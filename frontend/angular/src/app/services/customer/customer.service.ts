import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerDTO} from "../../models/customer-dto";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<CustomerDTO[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzY29wZXMiOlsiUk9MRV9VU0VSIl0sInN1YiI6Im1pc3R5Lm1hcnZpbkBhbWlnb3Njb2RlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RhbmNob2kubmV0bGlmeS5hcHAvIiwiaWF0IjoxNzEwOTY4NTE4LCJleHAiOjE3MTIyNjQ1MTh9.xUzZ_HxG954uy_4B-g8-L5zcadA2T3ZY9AgJTPsZank');
    return this.http.get<CustomerDTO[]>(
      'http://localhost:8080/api/v1/customers',
      {
        headers
      }
    );
  }
}
