import { Component, Input, OnInit } from '@angular/core';
import { CCustomInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomInput } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() configs: ICustomInput = CCustomInputConfiguration;
}
