import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CFormGeneralStyle } from '../../form-general-style.constant';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { EFields } from 'src/app/enums/fields.enum';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TCustomField } from 'src/app/interfaces/fields.interfaces';
import { setFieldStyle } from 'src/app/state/actions/field.actions';

@Component({
  selector: 'app-field-styles',
  templateUrl: './field-styles.component.html',
  styleUrls: ['./field-styles.component.scss'],
})
export class FieldStylesComponent implements OnInit {
  option: string;
  form: FormGroup;
  rgbPattern = CrgbPattern;

  generalStyle = CFormGeneralStyle;
  pickedField: IElement | null;

  subs: Subscription[] = [];

  constructor(
    private fieldTransferService: FieldTransferService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.onFieldChange();
  }

  onFieldChange(): void {
    const pickedFieldSubscription =
      this.fieldTransferService.pickedField.subscribe((value: IElement) => {
        this.pickedField = value;
        this.initForm();
      });

    this.subs.push(pickedFieldSubscription);
  }

  initForm(): void {
      this.pickedField?.style.isRequired)
    this.form = this.formBuilder.group({
      label: this.formBuilder.control(this.pickedField?.style.label, [
        Validators.minLength(1),
      ]),
      width: this.formBuilder.control(this.pickedField?.style.width, []),
      height: this.formBuilder.control(this.pickedField?.style.height, []),
      fontSize: this.formBuilder.control(this.pickedField?.style.fontSize, []),
      fontWeight: this.formBuilder.control(
        this.pickedField?.style.fontWeight.toString()
      ),
      color: this.formBuilder.control(this.pickedField?.style.color, [
        Validators.pattern(this.rgbPattern),
      ]),
      borderStyle: this.formBuilder.control(
        this.pickedField?.style.borderStyle,
        []
      ),
      isRequired: this.formBuilder.control(
        this.pickedField?.style.isRequired,
        []
      ),
      placeholder: this.formBuilder.control(
        this.pickedField?.style.placeholder
      ),
      items: this.formBuilder.control(
        this.pickedField?.style.items,
        this.hasOptions() ? Validators.required : []
      ),
    });
  }

  hasOptions(): boolean {
    return this.pickedField?.type
      ? [EFields.Checkbox, EFields.Select].indexOf(this.pickedField.type) > -1
      : false;
  }

  hasPlaceholder(): boolean {
    return this.pickedField?.type
      ? [EFields.Input, EFields.Textarea].indexOf(this.pickedField?.type) > -1
      : false;
  }

  addOption(): void {
    const options = [...(this.form.value.items || []), this.option];
    this.form.get('items')?.setValue(options);
    this.option = '';
  }

  submit(): void {
    const formData = this.form.value;
    const styleConfigs: TCustomField = {
      ...this.form.value,
      isRequired: formData.isRequired ? true : false,
    };

    this.pickedField = {
      ...this.pickedField,
      style: styleConfigs,
    } as IElement;

    this.store.dispatch(setFieldStyle({ updatedField: this.pickedField }));
  }

  deleteField(key: string): void {
    this.fieldTransferService.deleteFormField(key);
    this.fieldTransferService.pickedField = null;
  }

  onDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
