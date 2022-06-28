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
  private deleted$ = new Subject<string>();

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

  set deletedField(key: string) {
    this.deleted$.next(key);
  }

  get deletedField(): any {
    return this.deleted$;
  }

  deleteFormField(key: string) {
    this.deletedField = key;
    this.pickedField = null;
    this.fildsList = this.formFields.filter((field) => field.key !== key);
  }
}
