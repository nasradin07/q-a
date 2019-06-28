import { Component, OnInit } from '@angular/core';
import { EquationService } from './services/equation.service';

import { EquationInterface } from './interfaces/equation.interface';
import { ExpressionInterface } from './interfaces/expression.interface';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  problem = 'Solve equation';
  equation: EquationInterface;

constructor(
  private _equationService: EquationService
) {}

  ngOnInit() {
    this.generateEquation(false);
  }

  public getNextEquation(isComplex) {
    this.generateEquation(isComplex);
  }

  public generateEquation(isComplex) {
    this.equation = this._equationService.generateEquation(isComplex);
  }



}
