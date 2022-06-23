import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/modules/shared.module';
import { StylingModule } from './modules/styling/styling.module';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { FormBuilderModule } from './modules/form-builder/form-builder.module';
import { FormFieldsModule } from './modules/form-fields/form-fields.module';
import { HeaderModule } from './modules/header/header.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainComponent } from './pages/main/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
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
