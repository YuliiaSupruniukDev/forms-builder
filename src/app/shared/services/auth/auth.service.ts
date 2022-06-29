import { IAuthForm, IUser } from 'src/app/interfaces/user.interface';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { RequestsService } from '../requests.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  ROUTE = 'users';
  SECRET = 'secret';

  constructor(private requestService: RequestsService) {}

  get token(): string | null {
    return localStorage.getItem('token');
  }

  getAll(): Observable<IUser[]> {
    return this.requestService.get(this.ROUTE);
  }

  getByEmail(email: string): Observable<IUser[]> {
    const route = `${this.ROUTE}/?email=${email}`;
    return this.requestService.get(route);
  }

  login(userInfo: IAuthForm): Observable<string> {
    /* in fact, after login, a jwt comes to us from the server
     and then we save it in the local storage for subsequent requests*/

    return this.getByEmail(userInfo.email).pipe(
      switchMap((users) => {
        const token = users[0].password + users[0].email;
        return of(token);
      }),
      tap(this.setToken)
    );
  }

  register(userInfo: IAuthForm): Observable<IUser> {
    return this.requestService.post(this.ROUTE, userInfo);
  }

  logout() {
    localStorage.clear();
  }

  setToken(response: string) {
    if (response) {
      localStorage.setItem('token', response);
    } else {
      localStorage.clear();
    }
  }

  isAuthenticated() {
    return !!this.token;
  }
}
