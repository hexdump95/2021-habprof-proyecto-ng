import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.API_URL + '/api/v1/auth';

  constructor(private http: HttpClient, private router: Router) { }

  getAuthorizationToken() {
    return localStorage.getItem("access_token");
  }

  login(user: LoginRequest): void {
    this.http.post<any>(`${this.baseUrl}/login`, user, { observe: 'response' })
      .subscribe(res => {
        let authHeader = res.headers.get("Authorization");
        if (authHeader) {
          authHeader = authHeader.substring(7);
          localStorage.setItem("access_token", authHeader);
          this.router.navigate(['/']);
        }
      })
      ;
  }

  signup() {

  }
}
