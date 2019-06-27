import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* COMPONENTS */
import { EquationComponent } from './equation/equation.component';
import { EquationProblemComponent } from './equation/components/equation-problem/equation-problem.component';
import { EquationSolverComponent } from './equation/components/equation-solver/equation-solver.component';
/* SERVICES */

import { EquationService } from './equation/services/equation.service';

@NgModule({
  declarations: [
    EquationComponent,
    EquationProblemComponent,
    EquationSolverComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EquationService
  ],
  exports: [
    EquationComponent
  ]
})
export class MathModule { }
