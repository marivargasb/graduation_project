import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExpreComponent } from './one-expre.component';

describe('OneExpreComponent', () => {
  let component: OneExpreComponent;
  let fixture: ComponentFixture<OneExpreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneExpreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneExpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
