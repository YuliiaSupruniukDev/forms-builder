import { EFields } from '../enums/fields.enum';
import { TCustomField } from './fields.interfaces';

export interface IElement {
  key: string;
  type: EFields;
  style: TCustomField;
}
