import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  IElement,
  IElementItemKey,
} from 'src/app/interfaces/element.interface';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';
import { EFields } from 'src/app/enums/fields.enum';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectFieldsStyle } from 'src/app/state/selectors/fields.selectors';
import { setFields } from 'src/app/state/actions/field.actions';

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

  fieldsKeyList: IElementItemKey[] = [];
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
        this.updateFieldStyle(fields);
      }
    );
  }

  updateFieldStyle(fields: IElement[]): void {
    this.fieldsKeyList.map((field) => {
      let newField = fields.filter(
        (item: IElementItemKey) => item.key == field.key
      )[0];
      field.style = newField.style;
    });
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    this.fieldsKeyList = this.dragAndDropService.drop(
      event,
      this.fieldsKeyList
    );
    this.fieldsInfoArr = [];

    this.initFormFields();
  }

  initFormFields(): void {
    for (let i = 0; i < this.fieldsKeyList.length; i++) {
      const field: IElement = {
        ...this.fieldsKeyList[i],
        index: i,
      };
      this.fieldsInfoArr.push(field);
    }

    this.store.dispatch(setFields({ fields: [...this.fieldsInfoArr] }));
  }

  pickField(field: IElement): void {
    if (this.currentElement) this.unpickPreviousField();
    this.currentElement = this.items.nativeElement.children[field.index];
    this.renderer.addClass(this.currentElement, 'active');

    this.fieldTransferService.pickedField = field;
  }

  unpickPreviousField(): void {
    this.renderer.removeClass(this.currentElement, 'active');
  }

  deleteField(key: string): void {
  }

  saveForm() {
    alert("Form saved!")
  }

  onDestroy() {
    this.$fieldStylesSubscription.unsubscribe();
  }
}
