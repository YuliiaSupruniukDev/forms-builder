import { Component, OnInit } from '@angular/core';

import { CAuthFormGeneralStyle } from '../../auth-form.constant';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent{
  configs = CAuthFormGeneralStyle
}
