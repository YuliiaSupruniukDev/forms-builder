import { IElement } from 'src/app/interfaces/element.interface';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { setFields } from 'src/app/state/actions/field.actions';

@Injectable({
  providedIn: 'root',
})
export class FieldTransferService {
  private field = new Subject<IElement | null>();
  private formFields: IElement[] = [];

  constructor(private store: Store) {}

  set pickedField(value: IElement | null) {
    this.field.next(value);
  }

  get pickedField(): any {
    return this.field;
  }

  set fildsList(array: IElement[]) {
    this.formFields = array;
    this.store.dispatch(setFields({ fields: [...array] }));
  }

  deleteFormField(key: string) {
    this.fildsList = this.formFields.filter((field) => field.key !== key);
  }
}
