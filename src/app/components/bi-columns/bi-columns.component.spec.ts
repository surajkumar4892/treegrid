import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiColumnsComponent } from './bi-columns.component';

describe('BiColumnsComponent', () => {
  let component: BiColumnsComponent;
  let fixture: ComponentFixture<BiColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
