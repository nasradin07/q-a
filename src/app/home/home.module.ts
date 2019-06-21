import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeTestComponent } from './home-test/home-test.component';
import { EnterTestComponent } from './enter-test/enter-test.component'


@NgModule({
  declarations: [
    HomeComponent,
    HomeTestComponent,
    EnterTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
