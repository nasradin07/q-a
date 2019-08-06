import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home.component'
import { TestComponent } from './test/test.component';
import { JoinTestComponent } from './join-test/join-test.component';
import { AvailableTestComponent } from './available-test/available-test.component'


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'all-tests', component: AvailableTestComponent
      },
      {
        path: 'join-test', component: JoinTestComponent
      },
      { path: 'test', component: TestComponent},
      {
        path: '', component: AvailableTestComponent
      }
    ]
  }
  
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { 

}
