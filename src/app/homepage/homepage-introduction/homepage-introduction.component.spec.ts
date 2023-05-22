import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageIntroductionComponent } from './homepage-introduction.component';

describe('HomepageIntroductionComponent', () => {
  let component: HomepageIntroductionComponent;
  let fixture: ComponentFixture<HomepageIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
