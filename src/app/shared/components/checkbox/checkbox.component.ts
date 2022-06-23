import { Component, Input } from '@angular/core';
import { inputConfiguration } from 'src/app/core/constants/formConfigsInitial.constants';
import { Checkbox } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() configs: Checkbox = inputConfiguration
}
