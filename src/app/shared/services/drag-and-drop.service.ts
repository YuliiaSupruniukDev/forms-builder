import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DragAndDropService {
  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      let item:any = event.previousContainer.data[event.previousIndex];
      event.container.data.splice(event.currentIndex, 0, item);
    }
    console.log(event.container.data);
    console.log(event.previousContainer.data);
  }
}
