import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { EFields } from 'src/app/enums/fields.enum';
import { IElement } from 'src/app/interfaces/element.interface';
import { Injectable } from '@angular/core';
import { StyleService } from './style.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DragAndDropService {
  constructor(private styleService: StyleService) {}

  public drop(
    event: CdkDragDrop<string[]>,
    elementsArr: IElement[]
  ): IElement[] {
    let item: string = event.previousContainer.data[event.previousIndex];
    event.container.data.splice(event.currentIndex, 0, item);

    return this.setElementsArray(event.currentIndex, item, elementsArr);
  }

  setElementsArray(
    id: number,
    item: string,
    elementsArr: IElement[]
  ): IElement[] {
    const type = EFields[item as keyof typeof EFields];
    const newField: IElement = {
      key: uuid(),
      type,
      style: this.styleService.getInitialStyle(type),
    };

    elementsArr.splice(id, 0, newField);
    return elementsArr;
  }
}
