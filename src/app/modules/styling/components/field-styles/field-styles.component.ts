import { Component } from '@angular/core';
import { CFormGeneralStyle } from '../../form-general-style.constant';

@Component({
  selector: 'app-field-styles',
  templateUrl: './field-styles.component.html',
  styleUrls: ['./field-styles.component.scss'],
})
export class FieldStylesComponent {
  generalStyle = CFormGeneralStyle;
}
