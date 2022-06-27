import { createAction, props } from '@ngrx/store';

import { FormStyleActions } from './enums/form.enum';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';

export const setFormStyle = createAction(
  FormStyleActions.SetFormStyle,
  props<{ formStyle: IFormStyleConfig }>()
);
