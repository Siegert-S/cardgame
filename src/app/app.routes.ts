import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LobbyComponent } from './lobby/lobby.component';

export const routes: Routes = [
    { path: '', component: StartScreenComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'lobby', component: LobbyComponent },
];
