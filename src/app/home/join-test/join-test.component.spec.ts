import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTestComponent } from './join-test.component';

describe('JoinTestComponent', () => {
  let component: JoinTestComponent;
  let fixture: ComponentFixture<JoinTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
