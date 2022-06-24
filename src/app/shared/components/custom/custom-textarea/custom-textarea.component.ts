import { Component, Input } from '@angular/core';
import { CCustomTextareaConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomTextarea } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss']
})
export class CustomTextareaComponent {
  @Input() configs: ICustomTextarea = CCustomTextareaConfiguration;
}
