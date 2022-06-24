import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingComponent } from './components/styling/styling.component';
import { MaterialUIModule } from 'src/app/shared/modules/material-ui.module';
import { FormStylesComponent } from './components/form-styles/form-styles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldStylesComponent } from './components/field-styles/field-styles.component';
import { SharedMatModule } from 'src/app/shared/modules/sharedMat.module';
import { PanelStatePipe } from 'src/app/shared/pipes/panel-state.pipe';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    StylingComponent,
    FormStylesComponent,
    FieldStylesComponent,
    PanelStatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule,
    SharedMatModule,
    SharedModule,
  ],
  exports: [StylingComponent],
})
export class StylingModule {}
