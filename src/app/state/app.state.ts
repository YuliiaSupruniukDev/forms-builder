import { IElement } from '../interfaces/element.interface';
import { IFormStyleConfig } from '../interfaces/form.interface';

export interface AppState {
  formStyle: IFormStyleConfig;
  fieldsStyle: IElement[];
}
