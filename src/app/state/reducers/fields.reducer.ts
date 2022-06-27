import { createReducer, on } from '@ngrx/store';
import { setFieldStyle, setFields } from '../actions/field.actions';

import { IElement } from 'src/app/interfaces/element.interface';

export const initialState: IElement[] = [];

export const fieldStyleReducer = createReducer(
  initialState,
  on(setFields, (state, { fields }) => fields),
  on(setFieldStyle, (state, { updatedField }) => {
    return state.map((field: IElement) => {
        if (field.key === updatedField.key) {
          return updatedField;
        }
        return field;
      });
  })
);
