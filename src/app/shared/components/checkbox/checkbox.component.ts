import { Component, Input, OnInit } from '@angular/core';
import { Checkbox } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() configs: Checkbox

  constructor() { }

  ngOnInit(): void {
  }

}
