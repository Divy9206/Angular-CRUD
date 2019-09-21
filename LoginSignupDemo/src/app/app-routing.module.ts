import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './shared/login-screen/login-screen.component';
import { SignUpScreenComponent } from './shared/sign-up-screen/sign-up-screen.component';

const routes: Routes = [
  { path: '' , component: SignUpScreenComponent },
  { path: 'login' , component: LoginScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
