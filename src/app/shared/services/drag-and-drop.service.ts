import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { EFields } from 'src/app/enums/fields.enum';
import { IElementItemKey } from 'src/app/interfaces/element.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DragAndDropService {
  public drop(
    event: CdkDragDrop<string[]>,
    elementsArr: IElementItemKey[]
  ): IElementItemKey[] {
    let item: any = event.previousContainer.data[event.previousIndex];
    event.container.data.splice(event.currentIndex, 0, item);

    return this.setElementsArray(event.currentIndex, item, elementsArr);
  }

  setElementsArray(
    id: number,
    item: string,
    elementsArr: IElementItemKey[]
  ): IElementItemKey[] {
    let newField: IElementItemKey = {
      key: uuid(),
      type: EFields[item as keyof typeof EFields],
    };

    elementsArr.splice(id, 0, newField);
    return elementsArr;
  }
}
