import { IElement } from '../interfaces/element.interface';
import { IFormStyleConfig } from '../interfaces/form.interface';

export interface IAppState {
  formStyle: IFormStyleConfig;
  fieldsStyle: IElement[];
}
