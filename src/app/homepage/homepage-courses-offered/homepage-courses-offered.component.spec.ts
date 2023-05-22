import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCoursesOfferedComponent } from './homepage-courses-offered.component';

describe('HomepageCoursesOfferedComponent', () => {
  let component: HomepageCoursesOfferedComponent;
  let fixture: ComponentFixture<HomepageCoursesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageCoursesOfferedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCoursesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
