import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';
import { EFields } from 'src/app/enums/fields.enum';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectFieldsStyle } from 'src/app/state/selectors/fields.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  $fieldStyles = this.store.select(selectFieldsStyle);
  $fieldStylesSubscription: Subscription;

  currentElement: ElementRef;
  FIELDS = EFields;

  fieldsList: string[] = [];

  fieldsInfoArr: IElement[] = [];

  @ViewChild('items') items: ElementRef;

  constructor(
    private dragAndDropService: DragAndDropService,
    private fieldTransferService: FieldTransferService,
    private store: Store,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.$fieldStylesSubscription = this.$fieldStyles.subscribe(
      (fields: IElement[]) => {
        this.fieldsInfoArr = [...fields];
      }
    );
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    this.fieldsInfoArr = this.dragAndDropService.drop(
      event,
      this.fieldsInfoArr
    );

    this.initFormFields();
  }

  initFormFields(): void {
    this.fieldTransferService.fildsList = this.fieldsInfoArr;
  }

  pickField(field: IElement): void {
    this.fieldTransferService.pickedField = field;

    if (this.currentElement) this.unpickPreviousField();
    const id = this.fieldsInfoArr.indexOf(field);
    this.currentElement = this.items.nativeElement.children[id];
    this.renderer.addClass(this.currentElement, 'active');
  }

  unpickPreviousField(): void {
    this.renderer.removeClass(this.currentElement, 'active');
  }

  saveForm() {
    alert('Form saved!');
  }

  onDestroy() {
    this.$fieldStylesSubscription.unsubscribe();
  }
}
