import { Component, Input, forwardRef } from '@angular/core';

import { CCustomInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomInput } from 'src/app/interfaces/fields.interfaces';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueController } from 'src/app/shared/services/value-controller.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent extends ValueController {
  @Input() configs: ICustomInput = CCustomInputConfiguration;
  @Input() error?: string = '';
}
