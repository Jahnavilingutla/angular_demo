import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzondealsComponent } from './amzondeals.component';

describe('AmzondealsComponent', () => {
  let component: AmzondealsComponent;
  let fixture: ComponentFixture<AmzondealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmzondealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmzondealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
