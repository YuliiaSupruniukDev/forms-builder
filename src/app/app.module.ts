import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { CustomInputComponent } from './shared/components/custom/custom-input/custom-input.component';
import { CustomTextareaComponent } from './shared/components/custom/custom-textarea/custom-textarea.component';
import { CustomSelectComponent } from './shared/components/custom/custom-select/custom-select.component';
import { CustomCheckboxComponent } from './shared/components/custom/custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from './shared/components/custom/custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
