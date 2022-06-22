import { Component, ElementRef, OnInit } from '@angular/core';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';
import { fieldsList } from '../../constants/fieldsList.constant';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent {
  fields = fieldsList;
}
