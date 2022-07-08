import { Component, Input, forwardRef } from '@angular/core';

import { CCustomTextareaConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomTextarea } from 'src/app/interfaces/fields.interfaces';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueController } from 'src/app/shared/services/value-controller.service';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextareaComponent),
      multi: true,
    },
  ],
})
export class CustomTextareaComponent extends ValueController {
  @Input() configs: ICustomTextarea = CCustomTextareaConfiguration;
  @Input() error?: string = '';
}
