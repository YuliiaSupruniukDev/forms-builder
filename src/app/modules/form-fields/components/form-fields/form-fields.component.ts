import { Component } from '@angular/core';
import { fieldsList } from 'src/app/constants/fieldsList.constant';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent {
  fields = fieldsList;
}
