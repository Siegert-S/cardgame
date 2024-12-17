import { inject, Injectable } from '@angular/core';
import { Auth, authState, getAuth, User, user, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;

  errors: [{
    code: string;
    message: string;
  }] = [{ code: '', message: '' }];


  constructor(private router: Router) {

    // this.createUser(this.auth, 'test@test.de', '123456789abcdef');
    // this.loginUser( 'test@test.de', '123456789abcdef');


    this.userSubscription = this.user$.subscribe((aUser: User | null) => {

      console.log(aUser);

    })
  }

  createUser(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        this.router.navigateByUrl('/lobby');
      }).catch(
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode);
          console.error(errorMessage);
        });
  }

  loginUser(email: string, password: string): Promise<void | { code: string; message: string }> {
    let result = signInWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        this.router.navigateByUrl('/lobby');
      }).catch(
        (error) => {
          const loginError: {
            code: string;
            message: string;
          } = {
            code: error.code,
            message: error.message,
          };

          this.errors.push(loginError);
          return loginError;
        });
    return result;
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigateByUrl('/login')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
    })
  }



  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
