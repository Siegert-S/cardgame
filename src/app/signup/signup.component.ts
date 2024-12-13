import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ManageUserService } from '../manage-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  loginData = {
    email: '',
    password: ''
  };

  router = inject(Router);

  userManageService = inject(ManageUserService)

  onSubmit(ngForm: NgForm) {
    console.log(this.loginData);
    if (ngForm.submitted && ngForm.valid) {
      console.log('valid und submitted');
      this.userManageService.createUser(this.loginData.email, this.loginData.password);
    }
  }

  cancelSignUp() {
    this.router.navigateByUrl('/login');
  }


  emailIsInvalid() {
    const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;
    let result = regex.test(this.loginData.email);
    // console.log(this.loginData.email);
    // console.log(result);

    return !result;
  }
}
