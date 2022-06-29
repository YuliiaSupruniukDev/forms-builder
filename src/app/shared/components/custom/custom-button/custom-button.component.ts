import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CCustomButtonConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { ICustomButton } from 'src/app/interfaces/fields.interfaces';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomButtonComponent),
      multi: true,
    },
  ],
})
export class CustomButtonComponent implements ControlValueAccessor {
  inputValue: boolean = false;

  @Input() configs: ICustomButton = CCustomButtonConfiguration;
  @Input() buttonText?: string;
  @Input() width?: string;
  @Input() disabled?: boolean = false;
  @Input() error?: string = '';

  set value(val: any) {
    this.inputValue = val;
    this.onChange(val);
    this.onTouch(val);
  }

  get value(): boolean {
    return this.inputValue;
  }

  click(): void {
    this.value = true;
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
