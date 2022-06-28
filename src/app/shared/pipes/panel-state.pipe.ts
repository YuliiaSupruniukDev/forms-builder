import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'panelState',
})
export class PanelStatePipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'close' : 'open';
  }
}
