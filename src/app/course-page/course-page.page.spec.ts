import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursePagePage } from './course-page.page';

describe('CoursePagePage', () => {
  let component: CoursePagePage;
  let fixture: ComponentFixture<CoursePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
