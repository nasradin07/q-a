import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//rOUTER
import { MathRoutingModule } from './math-routing.module'

/* COMPONENTS */
import { MathComponent } from './math/math.component';
import { EquationComponent } from './equation/equation.component';
import { EquationProblemComponent } from './equation/components/equation-problem/equation-problem.component';
import { EquationSolverComponent } from './equation/components/equation-solver/equation-solver.component';
/* SERVICES */

import { EquationService } from './equation/services/equation.service';

@NgModule({
  declarations: [
    EquationComponent,
    EquationProblemComponent,
    EquationSolverComponent,
    MathComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MathRoutingModule
  ],
  providers: [
    EquationService
  ],
  exports: [  ]
})
export class MathModule { }
