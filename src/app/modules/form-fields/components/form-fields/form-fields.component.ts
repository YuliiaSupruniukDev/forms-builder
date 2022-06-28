import { CFieldsList } from 'src/app/constants/fieldsList.constant';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent {
  fields = CFieldsList;
}
