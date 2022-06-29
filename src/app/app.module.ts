import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalWindowComponent } from './shared/components/modal-window/modal-window.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { fieldStyleReducer } from './state/reducers/fields.reducer';
import { formStyleReducer } from './state/reducers/form.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ formStyle: formStyleReducer, fieldsStyle: fieldStyleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
