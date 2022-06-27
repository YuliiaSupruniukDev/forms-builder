import { createReducer, on } from '@ngrx/store';
import { IElement } from 'src/app/interfaces/element.interface';
import { setFields } from '../actions/field.actions';

export const initialState: IElement[] = [];

export const fieldStyleReducer = createReducer(
  initialState,
  on(setFields, (state, { fields }) => fields)
);
