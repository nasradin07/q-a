import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TestsComponent } from './tests/tests.component'
import { AvailableTestComponent } from './tests/available-test/available-test.component';
import { JoinTestComponent } from './tests/join-test/join-test.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    TestsComponent,
    AvailableTestComponent,
    JoinTestComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
  ]
})
export class HomeModule { }
