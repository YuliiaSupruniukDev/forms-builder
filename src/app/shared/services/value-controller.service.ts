import { ControlValueAccessor } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class ValueController implements ControlValueAccessor {
  private inputValue: string;

  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val: string) {
    this.inputValue = val;
    this.onChange(val);
    this.onTouch(val);
  }

  get value(): string {
    return this.inputValue;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
