import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mathRoutes } from './math.routes';

@NgModule({
  imports: [RouterModule.forChild(mathRoutes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
