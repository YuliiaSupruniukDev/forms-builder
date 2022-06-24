import { Component, Input } from '@angular/core';
import { CCustomCheckboxConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomCheckbox } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
})
export class CustomCheckboxComponent {
  @Input() configs: ICustomCheckbox = CCustomCheckboxConfiguration;
}
