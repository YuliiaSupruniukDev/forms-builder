import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IElement } from 'src/app/interfaces/element.interface';

export const selectFieldsStyle =
  createFeatureSelector<IElement[]>('fieldsStyle');

export const getFieldByKey = createSelector(
  selectFieldsStyle,
  (fieldsStyle: any, props: any) =>
    fieldsStyle.filter((field: IElement) => field.key === props.key)[0]
);
