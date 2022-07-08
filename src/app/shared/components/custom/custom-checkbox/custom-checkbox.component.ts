import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { CCustomCheckboxConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomCheckbox } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true,
    },
  ],
})
export class CustomCheckboxComponent implements ControlValueAccessor {
  private inputValue: string[];

  checked = this.formBuilder.array([]);
  @Input() configs: ICustomCheckbox = CCustomCheckboxConfiguration;
  @Input() error?: string = '';

  constructor(private formBuilder: FormBuilder) {}

  set value(val: any[]) {
    this.inputValue = val;
    this.onChange(val);
    this.onTouch(val);
  }

  get value(): string[] {
    return this.inputValue;
  }

  onCheckChange(event: any): void {
    const value: string = event.target.value;
    if (event.target.checked && value) {
      const control = this.formBuilder.control(value);
      this.checked.push(control);
    } else {
      this.checked.removeAt(
        this.checked.value.findIndex((value) => value === value)
      );
    }

    this.value = this.checked.value || [];
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: string[]): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
