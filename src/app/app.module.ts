import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**ROUTES */
import { AppRoutingModule } from './app-routing.module';

/** SERVICES */
import { JoinTestService } from './home/services/join-test.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeModule } from './home/home.module';
import { MathModule } from './modules/math/math.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    MathModule,
    AppRoutingModule
  ],
  providers: [JoinTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
