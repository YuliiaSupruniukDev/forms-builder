import { Component, Input, OnInit } from '@angular/core';
import { Select } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() configs: Select

  constructor() { }

  ngOnInit(): void {
  }

}
