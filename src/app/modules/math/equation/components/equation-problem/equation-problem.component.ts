import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equation-problem',
  templateUrl: './equation-problem.component.html',
  styleUrls: ['./equation-problem.component.css']
})
export class EquationProblemComponent implements OnInit {
  isComplex = false;
  problem = 'Solve equation';
  @Output() nextEquation = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  public getNewEquation() {
    this.nextEquation.emit(this.isComplex);
  }

}
