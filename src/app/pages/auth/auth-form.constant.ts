import { CInputConfiguration } from 'src/app/constants/formConfigsInitial.constants';
import { EWidthUnit } from 'src/app/enums/style.enums';

export const CAuthFormGeneralStyle = {
  email: {
    ...CInputConfiguration,
    label: 'Email',
    width: 100,
    widthUnits: EWidthUnit.Percent,
  },
  password: {
    ...CInputConfiguration,
    label: 'Password',
    width: 100,
    widthUnits: EWidthUnit.Percent,
  },
};
