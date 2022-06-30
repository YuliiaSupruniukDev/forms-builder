import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from './shared/services/interceptors/error.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { SnackBarService } from './shared/services/snack-bar.service';
import { StoreModule } from '@ngrx/store';
import { fieldStyleReducer } from './state/reducers/fields.reducer';
import { formStyleReducer } from './state/reducers/form.reducer';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule,
    StoreModule.forRoot({
      formStyle: formStyleReducer,
      fieldsStyle: fieldStyleReducer,
    }),
  ],
  providers: [interceptorProviders, MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
