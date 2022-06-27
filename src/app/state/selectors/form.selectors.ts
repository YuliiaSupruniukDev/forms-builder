import { createFeatureSelector } from '@ngrx/store';
import { IFormStyleConfig } from 'src/app/interfaces/form.interface';

export const selectFormStyle =
  createFeatureSelector<IFormStyleConfig>('formStyle');
