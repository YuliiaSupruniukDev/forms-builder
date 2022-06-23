import { EAppearance, EWidthUnit } from "../enums/style.enums";

export interface CustomInput {
  label: string;
  width: number;
  height: number;
  widthUnits: EWidthUnit;
  fontWeight: number;
  fontSize: number;
  color: string;
  appearance: EAppearance;
  isRequired: boolean;
}

export interface IInput {
  label: string;
  width: number;
  widthUnits: EWidthUnit;
  fontSize: number;
  appearance: EAppearance;
}

export interface SimpleInput extends IInput {
  placeholder: string;
  suffix: string;
}

export interface Textarea extends IInput {}

export interface Select extends IInput {
  items?: string[];
}

export interface Button extends IInput {}

export interface Checkbox extends IInput {
  items?: string[];
}
