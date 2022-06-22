import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
})
export class StylingComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  get state() {
    return this.panelOpenState ? 'close' : 'open';
  }
}
