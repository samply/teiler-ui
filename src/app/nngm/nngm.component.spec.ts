import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NngmComponent } from './nngm.component';

describe('NngmComponent', () => {
  let component: NngmComponent;
  let fixture: ComponentFixture<NngmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NngmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NngmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
