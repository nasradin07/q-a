import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationSolverComponent } from './equation-solver.component';

describe('EquationSolverComponent', () => {
  let component: EquationSolverComponent;
  let fixture: ComponentFixture<EquationSolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationSolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
