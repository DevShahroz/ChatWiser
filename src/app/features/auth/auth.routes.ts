import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const authRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
];
