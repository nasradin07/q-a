import { Routes } from '@angular/router';
import { EquationComponent } from './equation/equation.component'
import { MathComponent } from './math/math.component'

export const mathRoutes: Routes = [
   { 
      path: 'math', component: MathComponent,
      children: [
      ]
   },

]