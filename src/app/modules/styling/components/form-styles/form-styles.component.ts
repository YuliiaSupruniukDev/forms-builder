import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { CFormGeneralStyle } from '../../form-general-style.constant';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
})
export class FormStylesComponent implements OnInit {
  form: FormGroup;
  rgbPattern = CrgbPattern;
  generalStyle = CFormGeneralStyle;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      label: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      color: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      backgroundColor: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderType: this.formBuilder.control('', [Validators.required]),
      borderColor: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
    });
  }

  submit(): void{
    console.log(this.form.value);
  }
}
