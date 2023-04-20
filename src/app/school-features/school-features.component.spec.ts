import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFeaturesComponent } from './school-features.component';

describe('SchoolFeaturesComponent', () => {
  let component: SchoolFeaturesComponent;
  let fixture: ComponentFixture<SchoolFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
