import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { EFields } from 'src/app/enums/fields.enum';
import { IElement } from 'src/app/interfaces/element.interface';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  fieldsList: string[] = [];
  FIELDS = EFields;

  formObj: IElement[] = [];

  constructor(
    private dragAndDropService: DragAndDropService,
    private fieldTransferService: FieldTransferService
  ) {}

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
    this.fieldTransferService.pickedField = field;
  }
}
