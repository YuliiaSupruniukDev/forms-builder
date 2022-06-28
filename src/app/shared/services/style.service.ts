import {
  CInitialStyle,
} from 'src/app/constants/formConfigsInitial.constants';
import { EFields } from 'src/app/enums/fields.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class StyleService {
  getInitialStyle(type: EFields) {
    return CInitialStyle[type];
  }
}
