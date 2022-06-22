import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
})
export class StylingComponent implements OnInit {
  formStylePanelState = false;
  fieldStylePanelState = false;

  constructor() {}

  ngOnInit(): void {}

  togglePanel(option: 'form' | 'field') {
    switch (option) {
      case 'form':
        this.formStylePanelState = !this.formStylePanelState;
        break;
      case 'field':
        this.fieldStylePanelState = !this.fieldStylePanelState;
        break;
      default:
        break;
    }
  }
}
