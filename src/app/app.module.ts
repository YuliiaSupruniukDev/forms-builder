import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { StoreModule } from '@ngrx/store';
import { formStyleReducer } from './state/reducers/form.reducer';
import { fieldStyleReducer } from './state/reducers/fields.reducer';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ formStyle: formStyleReducer, fieldsStyle: fieldStyleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
