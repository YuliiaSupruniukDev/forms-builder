import { EAppearance, EWidthUnit } from '../enums/style.enums';

import { EColors } from '../enums/colors.enum';
import { EFields } from '../enums/fields.enum';

export const CCustomInputConfiguration = {
  label: '',
  placeholder: 'Input label',
  width: '',
  height: '',
  fontSize: '14',
  fontWeight: 400,
  color: EColors.Black,
  borderStyle: 'solid',
  isRequired: true,
};

export const CCustomTextareaConfiguration = {
  ...CCustomInputConfiguration,
  placeholder: 'Textarea label',
};

export const CCustomButtonConfiguration = {
  ...CCustomInputConfiguration,
  label: 'Button label',
  placeholder: '',
  width: '100%',
};

export const CCustomSelectConfiguration = {
  ...CCustomInputConfiguration,
  placeholder: 'Select label',
};

export const CCustomCheckboxConfiguration = {
  ...CCustomInputConfiguration,
  label: 'Checkbox label',
};

export const CInitialStyle = {
  [EFields.Input]: CCustomInputConfiguration,
  [EFields.Select]: CCustomSelectConfiguration,
  [EFields.Button]: CCustomButtonConfiguration,
  [EFields.Checkbox]: CCustomCheckboxConfiguration,
  [EFields.Textarea]: CCustomTextareaConfiguration,
};

export const CInputConfiguration = {
  label: 'Form Label',
  placeholder: '',
  width: 100,
  widthUnits: EWidthUnit.Percent,
  fontSize: 14,
  appearance: EAppearance.Fill,
  suffix: '',
};

export const CInitFormConfiguration = {
  label: 'Form label',
  color: EColors.Black,
  backgroundColor: EColors.White,
  borderStyle: 'solid',
  borderColor: EColors.LightGray,
};
