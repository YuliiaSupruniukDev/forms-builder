import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CAuthFormGeneralStyle } from '../../auth-form.constant';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, AfterViewInit {
  configs = CAuthFormGeneralStyle;
  templatePortal: TemplatePortal<any>;

  authForm: FormGroup;

  @ViewChild('login') loginTemplate: TemplateRef<any>;
  @ViewChild('register') registerTemplate: TemplateRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.setLoginTemplate();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.email,
        Validators.required,
      ]),
      password: this.formBuilder.control('', Validators.required),
    });
  }

  signIn(): void {
    console.log(this.authForm.value);
  }

  signUp(): void {
    console.log(this.authForm.value);
  }

  setLoginTemplate(): void {
    this.templatePortal = new TemplatePortal(
      this.loginTemplate,
      this.viewContainerRef
    );
  }

  setRegisterTemplate(): void {
    this.templatePortal = new TemplatePortal(
      this.registerTemplate,
      this.viewContainerRef
    );
  }

  getErrorMessage(control: string) {
    const field = this.authForm.controls[control];
    return field.touched && field.invalid ? 'Is invalid' : '';
  }
}
