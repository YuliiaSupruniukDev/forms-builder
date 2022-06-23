import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingComponent } from './components/styling/styling.component';
import { MaterialUIModule } from 'src/app/shared/modules/material-ui.module';
import { FormStylesComponent } from './components/form-styles/form-styles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FieldStylesComponent } from './components/field-styles/field-styles.component';

@NgModule({
  declarations: [StylingComponent, FormStylesComponent, FieldStylesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule,
    SharedModule
  ],
  exports: [StylingComponent],
})
export class StylingModule {}
