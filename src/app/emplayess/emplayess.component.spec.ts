import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplayessComponent } from './emplayess.component';

describe('EmplayessComponent', () => {
  let component: EmplayessComponent;
  let fixture: ComponentFixture<EmplayessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplayessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplayessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
