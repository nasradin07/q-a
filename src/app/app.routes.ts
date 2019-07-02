import { Routes} from '@angular/router';

import { EquationComponent } from './modules/math/equation/equation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


export const routes: Routes = [
  { path: 'equations', component: EquationComponent},
  { path: '**',component: PageNotFoundComponent}
]