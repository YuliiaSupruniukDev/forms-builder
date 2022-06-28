import {
  CBorderStyles,
  CFontWeight,
} from 'src/app/constants/borderStyles.constant';

import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { EWidthUnit } from 'src/app/enums/style.enums';

export const colorInput = {
  placeholder: '(255, 255, 255)',
  suffix: 'RGB',
};

export const CFormGeneralStyle = {
  label: {
    ...CInputConfiguration,
    label: 'Form Label',
    width: 100,
    widthUnits: EWidthUnit.Percent,
  },
  placeholder: {
    ...CInputConfiguration,
    label: 'Input placeholder',
  },
  textColor: {
    ...CInputConfiguration,
    label: 'Text Color',
    ...colorInput,
  },
  backgroundColor: {
    ...CInputConfiguration,
    label: 'Background',
    ...colorInput,
  },
  borderStyle: {
    ...CInputConfiguration,
    label: 'Border type',
    items: CBorderStyles,
  },
  borderColor: {
    ...CInputConfiguration,
    label: 'Border color',
    ...colorInput,
  },
  width: {
    ...CInputConfiguration,
    label: 'Width',
    suffix: 'px',
  },
  height: {
    ...CInputConfiguration,
    label: 'Heigth',
    suffix: 'px',
  },
  fontSize: {
    ...CInputConfiguration,
    label: 'Font size',
    suffix: 'px',
  },
  fontWeight: {
    ...CInputConfiguration,
    label: 'Font weight',
    items: CFontWeight,
  },
  color: {
    ...CInputConfiguration,
    label: 'Colour input',
    ...colorInput,
  },
  inputSelect: {
    ...CInputConfiguration,
    label: 'Add field',
    width: 100,
    widthUnits: EWidthUnit.Percent,
  },
};
