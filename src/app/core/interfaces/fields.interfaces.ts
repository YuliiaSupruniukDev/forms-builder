export interface CustomInput {
  label: string;
  width: number;
  height: number;
  fontWeight: number;
  fontSize: number;
  color: string;
  borderStyle: string;
  isRequired: boolean;
}

export interface SimpleInput extends CustomInput {
  placeholder: string;
}

export interface Textarea extends CustomInput {}

export interface Select extends CustomInput {
  items?: string[];
}

export interface Button extends CustomInput {}

export interface Checkbox extends CustomInput {
  items?: string[];
}
