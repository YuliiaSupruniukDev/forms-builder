import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IElement } from 'src/app/interfaces/element.interface';

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
