import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { Textarea } from 'src/app/interfaces/fields.interfaces';
import { ValueController } from 'src/app/shared/services/value-controller.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent extends ValueController {
  @Input() configs: Textarea = CInputConfiguration;
}
