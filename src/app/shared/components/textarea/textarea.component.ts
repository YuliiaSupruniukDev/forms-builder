import { Component, Input } from '@angular/core';
import { inputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { Textarea } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() configs: Textarea = inputConfiguration;
}
