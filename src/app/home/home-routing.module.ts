import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home.component'
import { TestsComponent } from './tests/tests.component';
import { JoinTestComponent } from './tests/join-test/join-test.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'test', component: TestsComponent
      },
      {
        path: 'join-test', component: JoinTestComponent
      },
      {path: '', redirectTo:'test', pathMatch: 'full' },
    ]
  }
  
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { 

}
