import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import * as routerConst from './app.routes';
const routes = routerConst.routes




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { 

}
