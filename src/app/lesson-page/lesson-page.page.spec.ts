import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonPagePage } from './lesson-page.page';

describe('LessonPagePage', () => {
  let component: LessonPagePage;
  let fixture: ComponentFixture<LessonPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
