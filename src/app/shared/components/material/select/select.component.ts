import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { Select } from 'src/app/interfaces/fields.interfaces';
import { ValueController } from 'src/app/shared/services/value-controller.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent extends ValueController {
  @Input() configs: Select = CInputConfiguration;
}
