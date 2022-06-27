import { createAction, props } from '@ngrx/store';
import { IElement } from 'src/app/interfaces/element.interface';

export const setFields = createAction(
  '[Fields Style] Set Fields',
  props<{ fields: IElement[] }>()
);
