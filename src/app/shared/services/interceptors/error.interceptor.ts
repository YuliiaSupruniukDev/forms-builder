import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((err) => {
        const error = err.error.message || err.error || err.statusText;
        this.snackBar.open(error, '', { duration: 3000 });
        return throwError(error);
      })
    );
  }
}
