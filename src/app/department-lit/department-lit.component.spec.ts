import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLitComponent } from './department-lit.component';

describe('DepartmentLitComponent', () => {
  let component: DepartmentLitComponent;
  let fixture: ComponentFixture<DepartmentLitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentLitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
