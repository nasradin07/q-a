import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**ROUTES */
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
/** SERVICES */
import { JoinTestService } from './services/join-test.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeModule } from './home/home.module';
import { MathModule } from './modules/math/math.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    MathModule,
    HomeRoutingModule,
    AppRoutingModule,

  ],
  providers: [JoinTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
