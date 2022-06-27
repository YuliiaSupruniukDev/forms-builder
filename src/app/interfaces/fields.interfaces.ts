import { EAppearance, EBorderStyle, EWidthUnit } from '../enums/style.enums';

export interface IMatField {
  label: string;
  width: number;
  widthUnits: EWidthUnit;
  fontSize: number;
  appearance: EAppearance;
}

export interface IInput extends IMatField {
  placeholder: string;
  suffix: string;
}

export interface ITextarea extends IMatField {}

export interface ISelect extends IMatField {
  items?: string[];
}

export interface IButton extends IMatField {}

export interface ICheckbox extends IMatField {
  items?: string[];
}

export interface ICustomField {
  label: string;
  placeholder: string;
  width: string;
  height: string;
  fontSize: string;
  fontWeight: number;
  color: string;
  borderStyle: EBorderStyle;
  isRequired: boolean;
  items?: string[];
}

export interface ICustomInput extends ICustomField {
  placeholder: string;
}

export interface ICustomTextarea extends ICustomField {}

export interface ICustomSelect extends ICustomField {
  items?: string[];
}

export interface ICustomButton extends ICustomField {}

export interface ICustomCheckbox extends ICustomField {}

export type TCustomField =
  | ICustomInput
  | ICustomTextarea
  | ICustomCheckbox
  | ICustomSelect
  | ICustomButton;
