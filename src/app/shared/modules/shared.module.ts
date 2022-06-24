import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputComponent } from '../components/custom/custom-input/custom-input.component';
import { CustomTextareaComponent } from '../components/custom/custom-textarea/custom-textarea.component';
import { CustomSelectComponent } from '../components/custom/custom-select/custom-select.component';
import { CustomCheckboxComponent } from '../components/custom/custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from '../components/custom/custom-button/custom-button.component';
import { FormsModule } from '@angular/forms';
import { ClickAfterChangeDirective } from '../directives/click-after-change.directive';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
    ClickAfterChangeDirective,
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
