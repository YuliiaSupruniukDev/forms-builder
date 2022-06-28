import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  form: FormGroup = new FormGroup({});

  subs: Subscription[] = [];

  currentElement: ElementRef;
  currentElementKey: string;
  FIELDS = EFields;

  fieldsList: string[] = [];

  fieldsInfoArr: IElement[] = [];
  configs: IFormStyleConfig = CInitFormConfiguration;
  @ViewChild('items') items: ElementRef;

  constructor(
    private dragAndDropService: DragAndDropService,
    private fieldTransferService: FieldTransferService,
    private store: Store,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.observeFieldStyle();
    this.observeFormStyle();
    this.observeDeletedFields();
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    this.fieldsInfoArr = this.dragAndDropService.drop(
      event,
      this.fieldsInfoArr
    );

    this.initFormFields();
    this.addNewControl(this.dragAndDropService.newItem);
  }

  initFormFields(): void {
    this.fieldTransferService.fildsList = this.fieldsInfoArr;
  }

  addNewControl(field: IElement) {
    const isRequired = field.style.isRequired;
    console.log(isRequired);
    this.form.addControl(
      field.key,
      this.formBuilder.control('', isRequired ? Validators.required : [])
    );
  }

  changeValidation(field: IElement) {
    this.form.controls[field.key].setValidators(
      field.style.isRequired ? Validators.required : []
    );

    console.log(field.style.isRequired)
  }

  pickField(field: IElement): void {
    if (this.currentElement) this.unpickPreviousField();
    const id = this.fieldsInfoArr.indexOf(field);
    this.currentElement = this.items.nativeElement.children[id];
    this.currentElementKey = field.key;
    this.renderer.addClass(this.currentElement, 'active');

    this.fieldTransferService.pickedField = field;
  }

  unpickPreviousField(): void {
    this.renderer.removeClass(this.currentElement, 'active');
  }

  saveForm() {
    alert('Form saved!');
    console.log(this.form.value);
  }

  deleteControl(key: string): void {
    this.form.removeControl(key);
  }

  observeFieldStyle(): void {
    const fieldStylesSubscription = this.fieldStyles$.subscribe(
      (fields: IElement[]) => {
        this.fieldsInfoArr = [...fields];

        if (this.currentElementKey) {
          const current = this.fieldsInfoArr.filter(
            (field) => field.key === this.currentElementKey
          )[0];
          this.changeValidation(current);
        }
      }
    );
    this.subs.push(fieldStylesSubscription);
  }

  observeFormStyle(): void {
    const formStyleSubscription = this.formStyle$.subscribe((value) => {
      this.configs = value;
    });

    this.subs.push(formStyleSubscription);
  }

  observeDeletedFields(): void {
    const fieldDeletionSubsctiption =
      this.fieldTransferService.deletedField.subscribe((fieldKey: string) => {
        this.deleteControl(fieldKey);
      });

    this.subs.push(fieldDeletionSubsctiption);
  }

  onDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
