import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { EFields } from 'src/app/enums/fields.enum';
import { IElement } from 'src/app/interfaces/element.interface';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { setFields } from 'src/app/state/actions/field.actions';
import { selectFieldsStyle } from 'src/app/state/selectors/fields.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  $fieldStyles = this.store.select(selectFieldsStyle);

  currentElement: any;
  FIELDS = EFields;
  formObj: IElement[] = []; //temp, will be object for store with style, index and typeof input

  fieldsList: string[] = [];

  @ViewChild('items') items: ElementRef<any>;

  constructor(
    private dragAndDropService: DragAndDropService,
    private fieldTransferService: FieldTransferService,
    private store: Store,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.$fieldStyles.subscribe((v) => {
      console.log('field -------', v);
    });
  }
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

    this.store.dispatch(setFields({ fields: [...this.formObj] }));
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
