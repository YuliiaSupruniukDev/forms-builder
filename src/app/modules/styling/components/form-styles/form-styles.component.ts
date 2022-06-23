import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CFormGeneralStyle } from '../../form-general-style.constant';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
})
export class FormStylesComponent implements OnInit {
  form: FormGroup;
  rgbPattern = /^\([0-9]{1,3},\s?[0-9]{1,3},\s?[0-9]{1,3}\)$/;
  generalStyle = CFormGeneralStyle
  
  ngOnInit(): void {
    this.form = new FormGroup({
      label: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      color: new FormControl('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      backgroundColor: new FormControl('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderType: new FormControl('', [Validators.required]),
      borderColor: new FormControl('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
