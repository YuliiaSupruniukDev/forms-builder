import { IFormStyleConfig } from 'src/app/interfaces/form.interface';
import { createFeatureSelector } from '@ngrx/store';

export const selectFormStyle =
  createFeatureSelector<IFormStyleConfig>('formStyle');
