import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { EquationComponent } from './equation/equation.component';
import { HomeComponent } from './home/home.component';


const routes = [
  { path: 'equations', component: EquationComponent},
  { path: 'home', component: HomeComponent},
  { path: '**',component: HomeComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { 

}
