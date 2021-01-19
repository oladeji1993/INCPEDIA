import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitPagePage } from './submit-page.page';

describe('SubmitPagePage', () => {
  let component: SubmitPagePage;
  let fixture: ComponentFixture<SubmitPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
