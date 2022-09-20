import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircComponent } from './hairc.component';

describe('HaircComponent', () => {
  let component: HaircComponent;
  let fixture: ComponentFixture<HaircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
