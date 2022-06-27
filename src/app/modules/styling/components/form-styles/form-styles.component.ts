import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { CFormGeneralStyle } from '../../form-general-style.constant';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { SetFormStyleAction } from 'src/app/state/actions/form.actions';
import { Store } from '@ngrx/store';
import { selectFormStyle } from 'src/app/state/selectors/form.selectors';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
})
export class FormStylesComponent implements OnInit {
  formStyle$ = this.store.select(selectFormStyle);

  form: UntypedFormGroup;
  rgbPattern = CrgbPattern;
  generalStyle = CFormGeneralStyle;

  constructor(private formBuilder: UntypedFormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.formStyle$.subscribe((data) => {
      this.initForm(data);
    });
  }

  initForm(data: IFormStyleConfig): void {
    this.form = this.formBuilder.group({
      label: this.formBuilder.control(data.label, [
        Validators.required,
        Validators.minLength(1),
      ]),
      color: this.formBuilder.control(data.color, [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      backgroundColor: this.formBuilder.control(data.borderColor, [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderType: this.formBuilder.control(data.borderType, [
        Validators.required,
      ]),
      borderColor: this.formBuilder.control(data.borderColor, [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
    });
  }

  submit(): void {
    const style: IFormStyleConfig = this.form.value;
    this.store.dispatch(new SetFormStyleAction(style));
  }
}
