import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  public get<T>(route: string): Observable<T> {
    return this.http.get<T>(this.createRoute(route));
  }

  public post<T>(route: string, body: any): Observable<T> {
    return this.http.post<T>(this.createRoute(route), body);
  }

  private createRoute = (route: string) => {
    return `${environment.apiUrl}/${route}`;
  };
}
