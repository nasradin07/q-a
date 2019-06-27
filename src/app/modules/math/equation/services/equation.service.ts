import { Injectable } from '@angular/core';

import {Equation, Fraction, Parser, Expression } from 'algebra.js';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

 private _operations = ['add','subtract','multiply','divide'];

  upperBoundForIntegers = 100;
  upperBoundForFractions = 20;

  constructor() { 
  }

  public checkSolution({userSolution,equation}) {
    return this.solveEquation(equation).toString() === userSolution;
  }

  public solveEquation(equation) {
    return equation.solveFor('x');
  }

  public generateEquation(isComplex) {
    let equation = (isComplex ? this._generateComplexEquation() : this._generateSimpleEquation());
    return equation;
  }

  private _generateComplexEquation() {
    let expression = this.generateExpression()
      .add(this.generateExpression(),false)
      .add(this.generateExpression(),false);

    return new Equation(expression,this.generateExpression());
  }

  private _generateSimpleEquation() {
    return new Equation( this.generateExpression(),this.generateNumber());
  }


  private generateExpression() {
    let expr = new Expression('x');
    let operation = this.generateOperation();
    let number = this.generateNumber();

    return expr[operation](number);
  }

  private generateOperation() {
    return this._operations[this.randomNumber(this._operations.length - 1)];
  }

  private generateNumber() {
    return (this.randomNumber(1) === 1 ? this.generateFraction() : this.generateInteger() );
  }

  private generateInteger() {
    return Math.round(Math.random()*this.upperBoundForIntegers);
  }

  private generateFraction() {
    return new Fraction(this.randomNumber(this.upperBoundForFractions),this.randomNumber(this.upperBoundForFractions));
  }

  private randomNumber(upperBound) {
    return Math.ceil(Math.random()*upperBound);
  }

}
