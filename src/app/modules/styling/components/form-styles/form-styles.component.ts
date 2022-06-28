import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CFormGeneralStyle } from '../../form-general-style.constant';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { SetFormStyleAction } from 'src/app/state/actions/form.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectFormStyle } from 'src/app/state/selectors/form.selectors';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
})
export class FormStylesComponent implements OnInit {
  formStyle$ = this.store.select(selectFormStyle);

  formStyleSubscription: Subscription;

  form: FormGroup;
  rgbPattern = CrgbPattern;
  generalStyle = CFormGeneralStyle;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.observeFormStyle();
  }

  observeFormStyle(): void {
    this.formStyleSubscription = this.formStyle$.subscribe((data) => {
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
      backgroundColor: this.formBuilder.control(data.backgroundColor, [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderStyle: this.formBuilder.control(data.borderStyle, [
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

  onDestroy(): void {
    this.formStyleSubscription.unsubscribe();
  }
}
