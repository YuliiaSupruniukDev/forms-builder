import { Component, Input } from '@angular/core';
import { CCustomSelectConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomSelect } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent {
  @Input() configs: ICustomSelect = CCustomSelectConfiguration;
}
