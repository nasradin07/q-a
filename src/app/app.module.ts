import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeModule } from './home/home.module';
import { MathModule } from './modules/math/math.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    MathModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
