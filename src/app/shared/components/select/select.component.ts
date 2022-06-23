import { Component, Input } from '@angular/core';
import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { Select } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() configs: Select = CInputConfiguration;
}
