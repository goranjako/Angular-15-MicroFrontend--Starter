import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './index/not-found/not-found.component';
import { FooterComponent } from './index/footer/footer.component';
import { AboutComponent } from './index/about/about.component';
import { MaterialModule } from 'auth-lib';
import { LoginComponent } from 'projects/auth-lib/src/lib/auth/login/login.component';
import { RegisterComponent } from 'projects/auth-lib/src/lib/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
