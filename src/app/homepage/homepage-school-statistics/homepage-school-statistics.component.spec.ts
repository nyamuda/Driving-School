import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSchoolStatisticsComponent } from './homepage-school-statistics.component';

describe('HomepageSchoolStatisticsComponent', () => {
  let component: HomepageSchoolStatisticsComponent;
  let fixture: ComponentFixture<HomepageSchoolStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSchoolStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageSchoolStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
