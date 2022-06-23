import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueController } from '../services/value-controller.service';

@Directive({
  selector: '[appFormControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlDirective),
      multi: true,
    },
  ],
})
export class FormControlDirective extends ValueController {}
