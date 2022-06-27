import { createAction, props } from '@ngrx/store';

import { FieldStyleActions } from './enums/field.enum';
import { IElement } from 'src/app/interfaces/element.interface';

export const setFields = createAction(
  FieldStyleActions.SetFormFields,
  props<{ fields: IElement[] }>()
);

export const setFieldStyle = createAction(
  FieldStyleActions.SetFieldStyle,
  props<{ updatedField: IElement }>()
);

export const deleteField = createAction(
  FieldStyleActions.DeleteField,
  props<{ key: string }>()
);
