import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './wrapper/wrapper.component';
import {Code404Component} from './code404/code404.component';
import {LoginComponent} from './login/login.component';
import {Register} from 'ts-node';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', component: WrapperComponent},
  {path: 'home', component: WrapperComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
