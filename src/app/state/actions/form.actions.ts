import { Action } from '@ngrx/store';
import { FormStyleActions } from './enums/form.enum';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';

export class SetFormStyleAction implements Action {
  public type = FormStyleActions.SetFormStyle;

  constructor(public payload: IFormStyleConfig) {}
}

export type TFormStyleActions = SetFormStyleAction;
