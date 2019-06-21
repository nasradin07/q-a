import { Injectable } from '@angular/core';
import {Equation, Fraction, Parser, Expression } from 'algebra.js';
@Injectable({
  providedIn: 'root'
})
export class EquationService {

  operations = ['add','subtract','multiply','divide'];

  maxInt = 100;
  maxFra = 20;
  minNum = 1;

  constructor() { 
  }

  public solveEquation(equation) {
    return equation.solveFor('x');
  }

  public generateEquation(isComplex) {
    console.log(isComplex);
    let equation = (isComplex ? this._generateComplexEquation() : this._generateSimpleEquation());
    return equation;
  }

  private _generateComplexEquation() {
    let expr = this.generateExpression();
    for (let i = 0; i < 3; i++) {
      expr = expr.add(this.generateExpression(),false);
    }
    let expr2 = this.generateExpression();
    return new Equation(expr,expr2);
  }

  private _generateSimpleEquation() {
    let expression= this.generateExpression();
    let result = this.generateNumber();
    let equation = new Equation(expression,result);
    return equation;
  }


  private generateExpression() {
    let expr = new Expression('x');
    let operation = this.generateOperation();
    let number = this.generateNumber();

    return expr[operation](number);
  }

  private generateOperation() {
    return this.operations[this.randomNumber(this.operations.length - 1)];
  }

  private generateNumber() {
    return (this.randomNumber(1) === 1 ? this.generateFraction() : this.generateInteger() );
  }

  private generateInteger() {
    return Math.round(Math.random()*this.maxInt);
  }

  private generateFraction() {
    return new Fraction(this.randomNumber(this.maxFra),this.randomNumber(this.maxFra));
  }

  private randomNumber(upperBound) {
    return Math.ceil(Math.random()*upperBound);
  }

}
