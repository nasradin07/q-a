import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component'
import { AvailableTestComponent } from './available-test/available-test.component';
import { JoinTestComponent } from './join-test/join-test.component';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module'

import { TestService } from './services/test.service';
import { JoinTestService } from './services/join-test.service';

@NgModule({
  declarations: [
    TestComponent,
    AvailableTestComponent,
    JoinTestComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
    ],
  exports: [
  ],
  providers: [
    TestService,
  JoinTestService
]
})
export class HomeModule { }
