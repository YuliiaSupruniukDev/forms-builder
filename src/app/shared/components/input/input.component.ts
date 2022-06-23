import { Component, Input, OnInit } from '@angular/core';
import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { SimpleInput } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() configs: SimpleInput = CInputConfiguration;
}
