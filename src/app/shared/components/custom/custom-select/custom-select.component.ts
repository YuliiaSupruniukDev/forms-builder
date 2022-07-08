import { Component, Input, forwardRef } from '@angular/core';

import { CCustomSelectConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomSelect } from 'src/app/interfaces/fields.interfaces';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueController } from 'src/app/shared/services/value-controller.service';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent extends ValueController {
  @Input() configs: ICustomSelect = CCustomSelectConfiguration;
  @Input() error?: string = '';
}
