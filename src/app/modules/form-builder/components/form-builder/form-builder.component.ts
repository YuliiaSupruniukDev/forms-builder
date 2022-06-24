import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';
import { EFields } from 'src/app/enums/fields.enum';
import { IElement } from 'src/app/interfaces/element.interface';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  fieldsList: string[] = [];
  FIELDS = EFields;

  formObj: IElement[] = [];

  @Output() pickedField: EventEmitter<IElement> = new EventEmitter();

  constructor(private dragAndDropService: DragAndDropService) {}

  onDrop(event: CdkDragDrop<string[]>): void {
    this.dragAndDropService.drop(event);
    this.formObj = [];

    this.initFormFields();
  }

  initFormFields(): void {
    for (let i = 0; i < this.fieldsList.length; i++) {
      let field: IElement = {
        index: i,
        type: EFields[this.fieldsList[i] as keyof typeof EFields],
      };
      this.formObj.push(field);
    }
  }

  pickField(field: IElement): void {
    this.pickedField.emit(field);
  }
}
