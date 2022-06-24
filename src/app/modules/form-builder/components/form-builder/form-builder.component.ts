import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
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
  currentElement: any;
  FIELDS = EFields;
  formObj: IElement[] = []; //temp, will be object for store with style, index and typeof input

  fieldsList: string[] = [];

  @ViewChild('items') items: ElementRef<any>;

  constructor(
    private dragAndDropService: DragAndDropService,
    private fieldTransferService: FieldTransferService,
    private renderer: Renderer2
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
    if (this.currentElement) {
      this.unpickPreviousField();
    }
    this.currentElement = this.items.nativeElement.children[field.index];
    this.renderer.addClass(this.currentElement, 'active');

    this.fieldTransferService.pickedField = field;
  }

  unpickPreviousField(): void {
    this.renderer.removeClass(this.currentElement, 'active');
  }
}
