import { createFeatureSelector } from '@ngrx/store';
import { IElement } from 'src/app/interfaces/element.interface';

export const selectFieldsStyle =
  createFeatureSelector<IElement[]>('fieldsStyle');
