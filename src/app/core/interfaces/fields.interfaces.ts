import { Appearance } from "../enums/style.enums";

export interface CustomInput {
  label: string;
  width: number;
  height: number;
  fontWeight: number;
  fontSize: number;
  color: string;
  appearance: Appearance;
  isRequired: boolean;
}

export interface SimpleInput extends CustomInput {
  placeholder: string;
  suffix: string;
}

export interface Textarea extends CustomInput {}

export interface Select extends CustomInput {
  items?: string[];
}

export interface Button extends CustomInput {}

export interface Checkbox extends CustomInput {
  items?: string[];
}
