import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ManageUserService } from '../manage-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  errCodes = [
    'auth/invalid-credential',
    'auth/invalid-email',
    'auth/user-disabled',
    'auth/user-not-found',
    'auth/wrong-password',
    'auth/too-many-requests',
    'auth/network-request-failed',
    'auth/operation-not-allowed',
    'auth/internal-error'
  ];

  userMessages = [
    'Invalid credentials.',
    'The entered email address is invalid.',
    'The user account has been disabled. Please contact support.',
    'No user found with this email address.',
    'The password is incorrect. Please check your input.',
    'Too many failed attempts. Please try again later.',
    'There was a network error. Please check your connection.',
    'Password login is currently disabled. Please contact support.',
    'An internal error occurred. Please try again later.'
  ];

  // userMessages = [
  //   'Ungültige Anmeldedaten.',
  //   'Die eingegebene E-Mail-Adresse ist ungültig.',
  //   'Das Benutzerkonto wurde deaktiviert. Bitte kontaktieren Sie den Support.',
  //   'Kein Benutzer mit dieser E-Mail-Adresse gefunden.',
  //   'Das Passwort ist falsch. Bitte überprüfen Sie Ihre Eingabe.',
  //   'Zu viele fehlgeschlagene Versuche. Bitte versuchen Sie es später erneut.',
  //   'Es gab einen Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.',
  //   'Anmeldung mit Passwort ist derzeit deaktiviert. Bitte kontaktieren Sie den Support.',
  //   'Ein interner Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
  // ];

  loginData = {
    email: '',
    password: ''
  };
  errMessage: string = '';

  userManageService = inject(ManageUserService)

  constructor(private router: Router) { }

  onSubmit(ngForm: NgForm) {
    console.log(this.loginData);
    if (ngForm.submitted && ngForm.valid) {
      console.log('valid und submitted');
      this.userManageService.loginUser(this.loginData.email, this.loginData.password).then((result) => {
        if (result) {
          this.errMessage = this.tellLoginError(result.code);
        }
      });
    }
  }

  signUp() {
    console.log('signup');
    this.router.navigateByUrl('/signup');

  }

  emailIsInvalid() {
    const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;
    let result = regex.test(this.loginData.email);
    // console.log(this.loginData.email);
    // console.log(result);

    return !result;
  }

  tellLoginError(errCode: string): string {
    const errIndex = this.errCodes.indexOf(errCode);
    if (errIndex !== -1) {
      return this.userMessages[errIndex];
    } else {
      return 'Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
    }
  }
}
