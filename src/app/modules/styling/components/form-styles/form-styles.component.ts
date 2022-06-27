import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { setFormStyle } from 'src/app/state/actions/form.actions';
import { selectFormStyle } from 'src/app/state/selectors/form.selectors';
import { CFormGeneralStyle } from '../../form-general-style.constant';

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
      console.log(data);
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
    this.store.dispatch(setFormStyle({ form: style }));
  }
}
