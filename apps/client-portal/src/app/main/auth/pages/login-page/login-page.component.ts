/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from 'primeng/api';
import { AppLayoutService } from '../../../layout/services/app-layout.service';
import { AuthService } from '../../services/auth.service';
import { AppNotificationService } from '../../../../store/services/app-notification.service';
import { AppLoadingService } from '../../../../store/services/app-loading.service';
import { E_UserType } from '@inventory-platform/api-interfaces';

@Component({
  selector: 'inventory-platform-budgeting-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  msgs: Message[] = [];
  login: any = true;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    public readonly layoutService: AppLayoutService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly appNotificationService: AppNotificationService,
    private readonly appLoadingService: AppLoadingService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {
    console.log('');
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  displayErrorMessages(error: string) {
    this.msgs = [];
    this.msgs.push({
      severity: 'error',
      summary: 'Error Message',
      detail: error,
    });
  }

  // login
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const formData = this.loginForm.value;

    const credentials = {
      email: formData.email,
      password: formData.password,
    };

    this.appLoadingService.startLoading('loading');
    this.authService.login(credentials).subscribe({
      next: (data) => {
        console.log('data', data.user.email_address);

        // this, (this.msgs = []);
        this.appLoadingService.stopLoading();
        if (data.user_type === E_UserType.ADMIN) {
          this.router.navigate(['/module/admin/dashboard']);
        } else if (data.user_type === E_UserType.USER) {
          this.router.navigate(['/module/client/dashboard']);
        } else {
          this.router.navigate(['/module/client/coming-soon']);
        }
        console.log('data', data.user.email_address);
        
      },
      error: (error) => {
        this.appLoadingService.stopLoading();
        this.displayErrorMessages(error.error.message.message);
      },
    });
  }


}
