import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSchoolFeaturesComponent } from './homepage-school-features.component';

describe('HomepageSchoolFeaturesComponent', () => {
  let component: HomepageSchoolFeaturesComponent;
  let fixture: ComponentFixture<HomepageSchoolFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSchoolFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageSchoolFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
