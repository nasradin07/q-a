import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { EquationService } from './services/equation.service';
import { EquationComponent } from './equation/equation.component';
import { HeaderComponent } from './header/header.component';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    HeaderComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule   
  ],
  providers: [EquationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
