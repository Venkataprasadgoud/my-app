import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingItamsComponent } from './sibling-itams.component';

describe('SiblingItamsComponent', () => {
  let component: SiblingItamsComponent;
  let fixture: ComponentFixture<SiblingItamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingItamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingItamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
