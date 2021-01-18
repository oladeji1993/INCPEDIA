import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignmentPagePage } from './assignment-page.page';

describe('AssignmentPagePage', () => {
  let component: AssignmentPagePage;
  let fixture: ComponentFixture<AssignmentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
