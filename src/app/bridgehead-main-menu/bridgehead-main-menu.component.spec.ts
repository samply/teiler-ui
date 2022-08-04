import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeheadMainMenuComponent } from './bridgehead-main-menu.component';

describe('BridgeheadMainMenuComponent', () => {
  let component: BridgeheadMainMenuComponent;
  let fixture: ComponentFixture<BridgeheadMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeheadMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgeheadMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
