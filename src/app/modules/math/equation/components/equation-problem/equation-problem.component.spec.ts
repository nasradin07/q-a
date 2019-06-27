import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationProblemComponent } from './equation-problem.component';

describe('EquationProblemComponent', () => {
  let component: EquationProblemComponent;
  let fixture: ComponentFixture<EquationProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
