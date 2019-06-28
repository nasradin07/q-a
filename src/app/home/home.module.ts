import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AvailableTestComponent } from './available-test/available-test.component'
import { JoinTestComponent } from './join-test/join-test.component'


@NgModule({
  declarations: [
    HomeComponent,
    AvailableTestComponent,
    JoinTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
