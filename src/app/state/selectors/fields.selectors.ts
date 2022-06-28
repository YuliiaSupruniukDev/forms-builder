import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IElement } from 'src/app/interfaces/element.interface';

export const selectFieldsStyle =
  createFeatureSelector<IElement[]>('fieldsStyle');

export const getFieldByKey = (key: string) =>
  createSelector(
    selectFieldsStyle,
    (fieldsStyle: IElement[]) =>
      fieldsStyle.filter((field: IElement) => field.key === key)[0]
  );
