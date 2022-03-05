import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcolumnsComponent } from './selectcolumns.component';

describe('SelectcolumnsComponent', () => {
  let component: SelectcolumnsComponent;
  let fixture: ComponentFixture<SelectcolumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcolumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcolumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
