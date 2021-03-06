import { Component, Input } from '@angular/core';
import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { IButton } from 'src/app/interfaces/fields.interfaces';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() configs: IButton = CInputConfiguration;
}
