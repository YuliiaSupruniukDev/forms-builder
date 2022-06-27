import { createAction, props } from '@ngrx/store';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';

export const setFormStyle = createAction(
  '[Form Style] Set Style',
  props<{ form: IFormStyleConfig }>()
);
