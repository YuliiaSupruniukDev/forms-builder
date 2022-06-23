import { Component, Input } from '@angular/core';
import { inputConfiguration } from 'src/app/core/constants/formConfigsInitial.constants';
import { Select } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() configs: Select = inputConfiguration;
}
