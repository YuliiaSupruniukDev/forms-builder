import { IElement } from 'src/app/interfaces/element.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FieldTransferService {
  private field = new Subject<IElement>();

  set pickedField(value: IElement) {
    this.field.next(value);
  }

  get pickedField(): any {
    return this.field;
  }
}
