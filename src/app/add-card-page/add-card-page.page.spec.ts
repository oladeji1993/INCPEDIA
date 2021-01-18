import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCardPagePage } from './add-card-page.page';

describe('AddCardPagePage', () => {
  let component: AddCardPagePage;
  let fixture: ComponentFixture<AddCardPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
