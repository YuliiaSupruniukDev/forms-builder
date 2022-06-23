import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUIModule } from './material-ui.module';
import { SelectComponent } from '../components/material/select/select.component';
import { ButtonComponent } from '../components/material/button/button.component';
import { PanelStatePipe } from '../pipes/panel-state.pipe';
import { TextareaComponent } from '../components/material/textarea/textarea.component';
import { InputComponent } from '../components/material/input/input.component';
import { CheckboxComponent } from '../components/material/checkbox/checkbox.component';

@NgModule({
  declarations: [
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectComponent,
    ButtonComponent,
    PanelStatePipe,
  ],
  imports: [CommonModule, MaterialUIModule],
  exports: [
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectComponent,
    ButtonComponent,
    PanelStatePipe,
  ],
})
export class SharedModule {}
