import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiColumnComponent } from './bi-column.component';

describe('BiColumnComponent', () => {
  let component: BiColumnComponent;
  let fixture: ComponentFixture<BiColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
