import { Component, Input, OnInit, forwardRef } from '@angular/core';

import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { IInput } from 'src/app/interfaces/fields.interfaces';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueController } from 'src/app/shared/services/value-controller.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends ValueController {
  @Input() configs: IInput = CInputConfiguration;
  @Input() error?: string = '';
}
