import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() configs: Button
  constructor() { }

  ngOnInit(): void {
  }

}
