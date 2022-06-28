import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { CInitFormConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';
import { EFields } from 'src/app/enums/fields.enum';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectFieldsStyle } from 'src/app/state/selectors/fields.selectors';
import { selectFormStyle } from 'src/app/state/selectors/form.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  formStyle$ = this.store.select(selectFormStyle);
  fieldStyles$ = this.store.select(selectFieldsStyle);

  subs: Subscription[] = [];

  currentElement: ElementRef;
  FIELDS = EFields;

  fieldsList: string[] = [];

  fieldsInfoArr: IElement[] = [];
  configs: IFormStyleConfig = CInitFormConfiguration;
  @ViewChild('items') items: ElementRef;

  constructor(
    private dragAndDropService: DragAndDropService,
    private fieldTransferService: FieldTransferService,
    private store: Store,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.observeFieldStyle();
    this.observeFormStyle();
  }

  observeFieldStyle(): void {
    const fieldStylesSubscription = this.fieldStyles$.subscribe(
      (fields: IElement[]) => {
        this.fieldsInfoArr = [...fields];
      }
    );

    this.subs.push(fieldStylesSubscription);
  }

  observeFormStyle(): void {
    const formStyleSubscription = this.formStyle$.subscribe((val) => {
      this.configs = val;
    });

    this.subs.push(formStyleSubscription);
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
    console.log(this.fieldsInfoArr);
  }

  onDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
