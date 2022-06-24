import { CBorderStyles } from 'src/app/constants/borderStyles.constant';
import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { EWidthUnit } from 'src/app/enums/style.enums';

export const CFormGeneralStyle = {
  label: {
    ...CInputConfiguration,
    label: 'Form Label',
    width: 100,
    widthUnits: EWidthUnit.Percent,
  },
  textColor: {
    ...CInputConfiguration,
    label: 'Text Color',
    placeholder: '(255, 255, 255)',
    suffix: 'RGB',
  },
  backgroundColor: {
    ...CInputConfiguration,
    label: 'Background',
    placeholder: '(255, 255, 255)',
    suffix: 'RGB',
  },
  borderType: {
    ...CInputConfiguration,
    label: 'Border type',
    items: CBorderStyles,
  },
  borderColor: {
    ...CInputConfiguration,
    label: 'Border color',
    placeholder: '(255, 255, 255)',
    suffix: 'RGB',
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
    items: [100, 200, 300, 400],
  },
  color: {
    ...CInputConfiguration,
    label: 'Font weight',
    suffix: 'px',
  },
};
