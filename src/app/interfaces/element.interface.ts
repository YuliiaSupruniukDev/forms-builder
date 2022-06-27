import { EFields } from '../enums/fields.enum';
import { TCustomField } from './fields.interfaces';

export interface IElement {
  index: number;
  type: EFields;
  style?: TCustomField;
  key?: string;
}
