import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  hide = true;

  loginSubscription: Subscription = new Subscription;

  hasLoginError: boolean = false;
  incorrectCredentialsMsg: string = "Email or password incorrect, please try again.";

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  submit() {
    if (this.loginForm.valid) {
      const emailControl = this.loginForm.get("email");
      const passwordControl = this.loginForm.get("password");

      if (emailControl && emailControl.value && passwordControl && passwordControl.value) {
        this.loginSubscription = this.authService.login(emailControl.value, passwordControl.value).subscribe({
          next: res => {
            this.authService.setSession(res.token)
            this.router.navigate(['/home']);
          },
          error: () => this.hasLoginError = true
        });
      }

    }
  }

  getErrorMessage() {

    if (this.loginForm.get("email")?.hasError('required') || this.loginForm.get("password")?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get("email")?.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnDestroy(): void {
    this.unsubscribe(this.loginSubscription);
  }

  unsubscribe(sub: Subscription) {
    if (sub) {
      sub.unsubscribe();
    }
  }

}
