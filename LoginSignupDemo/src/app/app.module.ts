import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './shared/login-screen/login-screen.component';
import { SignUpScreenComponent } from './shared/sign-up-screen/sign-up-screen.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from './shared/authservice/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SignUpScreenComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
