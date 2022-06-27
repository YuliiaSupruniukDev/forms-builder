import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CFormGeneralStyle } from '../../form-general-style.constant';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { EFields } from 'src/app/enums/fields.enum';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TCustomField } from 'src/app/interfaces/fields.interfaces';
import { getFieldByKey } from 'src/app/state/selectors/fields.selectors';
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
    this.initForm();
  }

  getFieldStyle(key: string): void {
    const fieldStyleChangeSubscription = this.store
      .select(getFieldByKey, { key })
      .subscribe((value) => {
        this.pickedField = value;
        this.initForm();
      });

    this.subs.push(fieldStyleChangeSubscription);
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      label: this.formBuilder.control(this.pickedField.style?.label, [
        Validators.required,
        Validators.minLength(1),
      ]),
      width: this.formBuilder.control(this.pickedField.style?.width, [
        Validators.required,
      ]),
      height: this.formBuilder.control(this.pickedField.style?.height, [
        Validators.required,
      ]),
      fontSize: this.formBuilder.control(this.pickedField.style?.fontSize, [
        Validators.required,
      ]),
      fontWeight: this.formBuilder.control(this.pickedField.style?.fontWeight, [
        Validators.required,
      ]),
      color: this.formBuilder.control(this.pickedField.style?.color, [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderType: this.formBuilder.control(
        this.pickedField.style?.borderStyle,
        [Validators.required]
      ),
      isRequired: this.formBuilder.control(
        this.pickedField.style?.isRequired,
        []
      ),
      items: this.formBuilder.control(
        this.pickedField.style?.items,
        this.hasOptions() ? Validators.required : []
      ),
    });
  }

  onFieldChange(): void {
    const pickedFieldSubscription =
      this.fieldTransferService.pickedField.subscribe((value: IElement) => {
        if (this.form) this.form.reset();
        this.getFieldStyle(value.key);
      });

    this.subs.push(pickedFieldSubscription);
  }

  hasOptions(): boolean {
    return (
      [EFields.Checkbox, EFields.Select].indexOf(this.pickedField?.type) > -1
    );
  }

  addOption(): void {
    const options = [...this.form.value.items || [], this.option];
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

    this.form.reset()
    this.store.dispatch(setFieldStyle({ updatedField: this.pickedField }));
  }

  onDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
