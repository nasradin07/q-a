import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { EquationService } from '../../services/equation.service'

@Component({
  selector: 'app-equation-solver',
  templateUrl: './equation-solver.component.html',
  styleUrls: ['./equation-solver.component.css']
})
export class EquationSolverComponent implements OnInit, OnChanges {
  @Input() equation;

  isUserSolutionCorrect;
  solution;
  userSolution;
  displaySolutionToUser = false;

  constructor(
    private _equationService: EquationService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange} ) {    
    if (changes['equation']) {
      this.clearUserInput();
    }
  }

  public checkSolution() {
    this.isUserSolutionCorrect =  this._equationService.checkSolution({
                                                          userSolution:this.userSolution,
                                                          equation: this.equation
                                                                      });
  }

  public showSolution() {
    this.getSolution();
    this.displaySolutionToUser = true;
  }

  private getSolution() {
    this.solution = this._equationService.solveEquation(this.equation).toString();
  }

  public clearUserInput() {
    this.userSolution = null;
    this.isUserSolutionCorrect = null;
    this.displaySolutionToUser = false;
  }

}
