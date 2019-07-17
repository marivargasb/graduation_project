import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogExpressionComponent } from './catalog-expression.component';

describe('CatalogExpressionComponent', () => {
  let component: CatalogExpressionComponent;
  let fixture: ComponentFixture<CatalogExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
