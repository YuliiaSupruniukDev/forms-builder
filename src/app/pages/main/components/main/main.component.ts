import { Component, OnInit } from '@angular/core';
import { IElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  pickedField: IElement;

  setPickedField(event: IElement): void {
    this.pickedField = event;
    console.log(this.pickedField);
  }

  getPickedField(): IElement {
    return this.pickedField;
  }
}
