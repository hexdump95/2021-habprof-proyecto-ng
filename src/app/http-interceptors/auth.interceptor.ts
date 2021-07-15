import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getAuthorizationToken();
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    if (authToken) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + authToken)
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}