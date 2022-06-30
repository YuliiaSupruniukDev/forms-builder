import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { SnackBarService } from '../snack-bar.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: SnackBarService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((err) => {
        const error = err.error.message || err.statusText || err.error;
        this.snackBar.openSnackBar(error);
        return throwError(error);
      })
    );
  }
}
