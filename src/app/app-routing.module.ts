import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { CreateUserComponent } from './create-user/create-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';



const routes: Routes = [


  { path: 'home', component: HomeScreenComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: CreateUserComponent },

  // otherwise redirect to dashboard
  { path: '**', redirectTo: 'register' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);