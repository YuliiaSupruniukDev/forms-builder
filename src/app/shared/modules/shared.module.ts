import { ClickAfterChangeDirective } from '../directives/click-after-change.directive';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../components/custom/custom-button/custom-button.component';
import { CustomCheckboxComponent } from '../components/custom/custom-checkbox/custom-checkbox.component';
import { CustomInputComponent } from '../components/custom/custom-input/custom-input.component';
import { CustomSelectComponent } from '../components/custom/custom-select/custom-select.component';
import { CustomTextareaComponent } from '../components/custom/custom-textarea/custom-textarea.component';
import { FormsModule } from '@angular/forms';
import { MaterialUIModule } from './material-ui.module';
import { ModalWindowComponent } from '../components/modal-window/modal-window.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
    ClickAfterChangeDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    CustomButtonComponent
  ],
})
export class SharedModule {}
