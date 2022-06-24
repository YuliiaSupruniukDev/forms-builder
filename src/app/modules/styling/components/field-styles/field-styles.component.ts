import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CrgbPattern } from 'src/app/constants/patterns.constant';
import { EFields } from 'src/app/enums/fields.enum';
import { IElement } from 'src/app/interfaces/element.interface';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { CFormGeneralStyle } from '../../form-general-style.constant';

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

  pickedFieldSubscription: Subscription;

  constructor(
    private fieldTransferService: FieldTransferService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onFieldChange();
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      label: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      width: this.formBuilder.control('', [Validators.required]),
      height: this.formBuilder.control('', [Validators.required]),
      fontSize: this.formBuilder.control('', [Validators.required]),
      fontWeight: this.formBuilder.control('', [Validators.required]),
      color: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.rgbPattern),
      ]),
      borderType: this.formBuilder.control('', [Validators.required]),
      items: this.formBuilder.control([], [Validators.required]),
    });
  }

  onFieldChange(): void {
    this.pickedFieldSubscription =
      this.fieldTransferService.pickedField.subscribe((value: IElement) => {
        this.pickedField = value;
      });
  }

  hasOptions(): boolean {
    return (
      [EFields.Checkbox, EFields.Select].indexOf(this.pickedField.type) > -1
    );
  }

  addOption(): void {
    const options = [...this.form.value.items, this.option];
    this.form.get('items')?.setValue(options);
  }

  submit() {
    console.log(this.form.value);
  }

  onDestroy(): void {
    this.pickedFieldSubscription.unsubscribe();
  }
}
