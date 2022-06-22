import { Component, ElementRef, OnInit } from '@angular/core';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent {
  fields = ['Input', 'Textarea', 'Button', 'Checkbox', 'Select'];
}
