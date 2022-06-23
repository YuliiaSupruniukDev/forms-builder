import { Component, Input } from '@angular/core';
import { inputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { Button } from 'src/app/interfaces/fields.interfaces';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() configs: Button = inputConfiguration;
}
