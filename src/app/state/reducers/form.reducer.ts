import { createReducer, on } from '@ngrx/store';

import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { setFormStyle } from '../actions/form.actions';

export const initialState: IFormStyleConfig = {
  label: '',
  color: '',
  backgroundColor: '',
  borderType: '',
  borderColor: '',
};

export const formStyleReducer = createReducer(
  initialState,
  on(setFormStyle, (state, { formStyle }) => formStyle)
);
