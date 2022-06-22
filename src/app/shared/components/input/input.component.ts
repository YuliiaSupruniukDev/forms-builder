import { Component, Input, OnInit } from '@angular/core';
import { inputConfiguration } from 'src/app/core/constants/formConfigsInitial.constants';
import { SimpleInput } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() configs: SimpleInput = inputConfiguration
  constructor() { }

  ngOnInit(): void {
  }

}
