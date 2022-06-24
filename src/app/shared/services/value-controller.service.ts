import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export abstract class ValueController implements ControlValueAccessor {
  inputValue: string;

  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val: any) {
    this.inputValue = val;
    this.onChange(val);
    this.onTouch(val);
  }

  get value(): string {
    return this.inputValue;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
