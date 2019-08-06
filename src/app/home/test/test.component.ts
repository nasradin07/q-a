import { Component, OnInit } from '@angular/core';

import { TestService } from '../services/test.service'

@Component({
  selector: 'app-tests',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions;


  constructor(
    private _testService: TestService
  ) { }

  ngOnInit() {
    this.questions = this._testService.getTest();

  }

}
