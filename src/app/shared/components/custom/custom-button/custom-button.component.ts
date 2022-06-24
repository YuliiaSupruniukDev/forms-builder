import { Component, Input } from '@angular/core';
import { CCustomButtonConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomButton } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() configs: ICustomButton = CCustomButtonConfiguration;
  @Input() buttonText?: string;
  @Input() width?: string;
  @Input() disabled?: boolean = false;
}
