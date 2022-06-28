import { Action } from '@ngrx/store';
import { CInitFormConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { FormStyleActions } from '../actions/enums/form.enum';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { TFormStyleActions } from '../actions/form.actions';

export const initialState: IFormStyleConfig = {
  ...CInitFormConfiguration
};

export const formStyleReducer = (
  state = initialState,
  action: Action
): IFormStyleConfig => {
  const formStyleAction = action as TFormStyleActions;
  switch (formStyleAction.type) {
    case FormStyleActions.SetFormStyle:
      return { ...formStyleAction.payload };
    default:
      return state;
  }
};
