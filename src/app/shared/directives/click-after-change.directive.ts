import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickAfterChange]',
})
export class ClickAfterChangeDirective {
  constructor(private element: ElementRef) {}

  @HostListener('focus', ['$event']) onFocus() {
    this.element.nativeElement.click();
  }
}
