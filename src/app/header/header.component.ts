import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import * as routerConst from '../app.routes';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  equationRoute: string;

  constructor() { }

  ngOnInit() {
    this.equationRoute = routerConst.routes[0].path
    console.log(this.equationRoute);
  }

}
