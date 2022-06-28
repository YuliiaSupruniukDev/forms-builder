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
  pickedField: IElement;

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
        this.initForm(value.style);
      });

    this.subs.push(pickedFieldSubscription);
  }

  initForm(vals: any): void {
    this.form = this.formBuilder.group({
      label: this.formBuilder.control(vals.label, [
        Validators.required,
        Validators.minLength(1),
      ]),
      width: this.formBuilder.control(vals.width, [Validators.required]),
      height: this.formBuilder.control(vals.height, [
        Validators.required,
      ]),
      fontSize: this.formBuilder.control(vals.fontSize, [
        Validators.required,
      ]),
      fontWeight: this.formBuilder.control(vals.fontWeight.toString(), [
        Validators.required,
      ]),
      color: this.formBuilder.control(vals.color, [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderType: this.formBuilder.control(vals.borderStyle, [
        Validators.required,
      ]),
      isRequired: this.formBuilder.control(vals.isRequired, []),
      items: this.formBuilder.control(
        vals.items,
        this.hasOptions() ? Validators.required : []
      ),
    });
  }

  hasOptions(): boolean {
    return (
      [EFields.Checkbox, EFields.Select].indexOf(this.pickedField?.type) > -1
    );
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
    };

    this.form.reset();
    this.store.dispatch(setFieldStyle({ updatedField: this.pickedField }));
  }

  deleteField(): void {
    this.fieldTransferService.deleteFormField(this.pickedField.key);
  }

  onDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}

/*
  getFieldStyle(key: string): void {
    const fieldStyleChangeSubscription = this.store
      .select(getFieldByKey(key))
      .subscribe((value) => {
        this.pickedField = value;
        this.initForm(value);
      });

    this.subs.push(fieldStyleChangeSubscription);
  }
*/
