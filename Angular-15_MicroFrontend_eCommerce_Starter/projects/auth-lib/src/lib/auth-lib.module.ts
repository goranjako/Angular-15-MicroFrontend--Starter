import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';




@NgModule({
  declarations: [
    AuthLibComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
  ],
  exports: [
    AuthLibComponent
  ]
})
export class AuthLibModule { }
