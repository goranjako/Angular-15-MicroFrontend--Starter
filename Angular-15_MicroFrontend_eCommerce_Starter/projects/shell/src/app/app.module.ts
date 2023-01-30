import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './index/not-found/not-found.component';
import { FooterComponent } from './index/footer/footer.component';
import { AboutComponent } from './index/about/about.component';
import { MaterialModule } from '@auth-lib';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    AboutComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
