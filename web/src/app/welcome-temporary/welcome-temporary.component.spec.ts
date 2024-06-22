import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTemporaryComponent } from './welcome-temporary.component';

describe('WelcomeTemporaryComponent', () => {
  let component: WelcomeTemporaryComponent;
  let fixture: ComponentFixture<WelcomeTemporaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeTemporaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeTemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
