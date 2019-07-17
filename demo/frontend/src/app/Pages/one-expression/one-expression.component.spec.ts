import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExpressionComponent } from './one-expression.component';

describe('OneExpressionComponent', () => {
  let component: OneExpressionComponent;
  let fixture: ComponentFixture<OneExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
