import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
})
export class StylingComponent {
  formStylePanelState = false;
  fieldStylePanelState = false;

  togglePanel(option: 'form' | 'field'): void {
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
