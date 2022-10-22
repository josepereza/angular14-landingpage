import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaPostComponent } from './pages/alta-post/alta-post.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CustomCardComponent } from './pages/custom-card/custom-card.component';
import { IconosComponent } from './pages/iconos/iconos.component';
import { FooterComponent } from './pages/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    AltaPostComponent,
    HomeComponent,
    CustomCardComponent,
    IconosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
