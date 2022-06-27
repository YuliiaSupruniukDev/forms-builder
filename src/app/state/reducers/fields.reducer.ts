import { createReducer, on } from '@ngrx/store';
import { IElement } from 'src/app/interfaces/element.interface';
import { setFields } from '../actions/field.actions';
import { v4 as uuid } from 'uuid';

export const initialState: IElement[] = [];

export const fieldStyleReducer = createReducer(
  initialState,
  on(setFields, (state, { fields }) => {
    fields.forEach((field) => {
      field.key = uuid();
    });

    return fields;
  })
);
