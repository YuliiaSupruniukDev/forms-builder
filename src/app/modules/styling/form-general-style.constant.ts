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
    width: 47,
    widthUnits: EWidthUnit.Percent,
    suffix: 'RGB',
  },
  backgroundColor: {
    ...CInputConfiguration,
    label: 'Background',
    placeholder: '(255, 255, 255)',
    width: 47,
    widthUnits: EWidthUnit.Percent,
    suffix: 'RGB',
  },
  borderType: {
    ...CInputConfiguration,
    label: 'Border type',
    width: 47,
    widthUnits: EWidthUnit.Percent,
    items: CBorderStyles,
  },
  borderColor: {
    ...CInputConfiguration,
    label: 'Border color',
    placeholder: '(255, 255, 255)',
    width: 47,
    widthUnits: EWidthUnit.Percent,
    suffix: 'RGB',
  },
};
