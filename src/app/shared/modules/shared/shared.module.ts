import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from '../../components/input/input.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { SelectComponent } from '../../components/select/select.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { ButtonComponent } from '../../components/button/button.component';

@NgModule({
  declarations: [InputComponent, TextareaComponent,  CheckboxComponent, SelectComponent, ButtonComponent],
  imports: [CommonModule, MaterialUIModule],
  exports: [InputComponent, TextareaComponent, CheckboxComponent, SelectComponent, ButtonComponent],
})
export class SharedModule {}
