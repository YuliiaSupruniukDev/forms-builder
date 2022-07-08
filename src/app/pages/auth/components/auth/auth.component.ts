import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthForm, IUser } from 'src/app/interfaces/user.interface';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CAuthFormGeneralStyle } from '../../auth-form.constant';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { Subscription } from 'rxjs';
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

  users: IUser[];

  subs: Subscription[] = [];

  @ViewChild('login') loginTemplate: TemplateRef<any>;
  @ViewChild('register') registerTemplate: TemplateRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']);
    }
    this.initForm();
    this.observeUsers();
  }

  ngAfterViewInit(): void {
    this.setLoginTemplate();
  }

  initForm(): void {
    this.authForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.email,
        Validators.required,
      ]),
      password: this.formBuilder.control('', Validators.required),
    });
  }

  signIn(): void {
    const data = this.authForm.value;

    // this messages usually come from server
    if (!this.checkExistance(data)) {
      this.snackBar.openSnackBar('User doesn`t exist!');
      return;
    }

    if (!this.checkPassword(data)) {
      this.snackBar.openSnackBar('Wrong password!');
      return;
    }
    // ----------------------------------------

    const loginSubscription = this.authService
      .login(this.authForm.value)
      .subscribe((v) => {
        this.authForm.reset();
        this.router.navigate(['']);
      });

    this.subs.push(loginSubscription);
  }

  signUp(): void {
    const data = this.authForm.value;

    if (this.checkExistance(data)) {
      this.authForm.reset();
      this.snackBar.openSnackBar('User already exists!');
      return;
    }

    const registerSubscription = this.authService
      .register(data)
      .subscribe((user: IUser) => {
        this.users.push(user);
        this.authForm.reset();
        this.snackBar.openSnackBar('User successfully registered');
      });

    this.subs.push(registerSubscription);
  }

  checkExistance(userInfo: IAuthForm): boolean {
    return !!this.users.filter((user) => user.email === userInfo.email)[0];
  }

  checkPassword(userInfo: IAuthForm): boolean {
    return !!this.users.filter(
      (user) => user.password === userInfo.password
    )[0];
  }

  observeUsers(): void {
    const userSubscription = this.authService.getAll().subscribe((users) => {
      this.users = users;
    });

    this.subs.push(userSubscription);
  }

  setLoginTemplate(): void {
    this.templatePortal = new TemplatePortal(
      this.loginTemplate,
      this.viewContainerRef
    );
    this.authForm.reset();
  }

  setRegisterTemplate(): void {
    this.templatePortal = new TemplatePortal(
      this.registerTemplate,
      this.viewContainerRef
    );
    this.authForm.reset();
  }

  getErrorMessage(control: string): string {
    const field = this.authForm.controls[control];
    return field.touched && field.invalid ? 'Is invalid' : '';
  }

  onDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
