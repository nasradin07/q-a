import { Component, OnInit } from '@angular/core';
import { EquationService } from '../services/equation.service';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  equation;
  userSolution;
  isComplex = false;
  problem = 'Solve equation';
  correct;
  solution;

constructor(
  private _equationService: EquationService
) {}

  ngOnInit() {
    this.generateEquation();
  }

  public generateEquation() {
    this.equation = this._equationService.generateEquation(this.isComplex);
  }

  public checkSolution() {
    let solution = this._equationService.solveEquation(this.equation);
    this.userSolution === solution.toString() ? this.correct = true : this.correct = false;
    this.solution = solution;
  }


}
