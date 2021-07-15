import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAll(url: string): any {
    const esp = this.http.get<Object[]>(url, { observe: 'response' });
    return esp.pipe(
      map((res: any) => {
        const authHeader = res.headers.get("Authorization");
        if (authHeader)
          this.auth.setAuthorizationToken(authHeader);
        return res.body;
      }
      ),
      catchError(err => {
        console.log(err);
        return of('error', err)
      })
    );
  }
}

