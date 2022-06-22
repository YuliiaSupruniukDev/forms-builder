import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './core/pages/auth/auth.component';
import { MainComponent } from './core/pages/main/main.component';
import { HeaderComponent } from './core/components/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/modules/shared/shared.module';
import { FormBuilderComponent } from './core/components/form-builder/form-builder.component';
import { FormFieldsComponent } from './core/components/form-fields/form-fields.component';
import { StylingModule } from './core/components/styling/styling.module';
import { PanelStatePipe } from './shared/pipes/panel-state.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    HeaderComponent,
    FormBuilderComponent,
    FormFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    SharedModule,
    StylingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
