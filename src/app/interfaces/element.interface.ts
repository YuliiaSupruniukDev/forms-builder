import { EFields } from '../enums/fields.enum';
import { TCustomField } from './fields.interfaces';

export interface IElementItemKey {
  key: string;
  type: EFields;
  style?: TCustomField;
}

export interface IElement extends IElementItemKey {
  index: number;
}
