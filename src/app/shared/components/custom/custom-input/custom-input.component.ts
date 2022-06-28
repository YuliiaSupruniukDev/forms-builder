import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CCustomInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomInput } from 'src/app/interfaces/fields.interfaces';
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
}
