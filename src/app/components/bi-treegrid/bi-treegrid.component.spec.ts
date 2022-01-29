import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiTreegridComponent } from './bi-treegrid.component';

describe('BiTreegridComponent', () => {
  let component: BiTreegridComponent;
  let fixture: ComponentFixture<BiTreegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiTreegridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiTreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
