import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUIModule } from './material-ui.module';
import { SelectComponent } from '../components/material/select/select.component';
import { ButtonComponent } from '../components/material/button/button.component';
import { PanelStatePipe } from '../pipes/panel-state.pipe';
import { TextareaComponent } from '../components/material/textarea/textarea.component';
import { InputComponent } from '../components/material/input/input.component';
import { CheckboxComponent } from '../components/material/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from '../components/custom/custom-input/custom-input.component';
import { CustomTextareaComponent } from '../components/custom/custom-textarea/custom-textarea.component';
import { CustomSelectComponent } from '../components/custom/custom-select/custom-select.component';
import { CustomCheckboxComponent } from '../components/custom/custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from '../components/custom/custom-button/custom-button.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
  ],
})
export class SharedModule {}
