import { Component, Input, OnInit } from '@angular/core';
import { Textarea } from 'src/app/core/interfaces/fields.interfaces';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  @Input() configs: Textarea;

  constructor() {}

  ngOnInit(): void {}
}
