import { EFields } from '../enums/fields.enum';
import { TCustomField } from './fields.interfaces';

export interface IElementItemKey {
  key: string;
  type: EFields;
}

export interface IElement extends IElementItemKey {
  index: number;
  style?: TCustomField;
}
