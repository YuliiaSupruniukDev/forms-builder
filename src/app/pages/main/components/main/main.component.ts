import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFormStyle } from 'src/app/state/selectors/form.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
