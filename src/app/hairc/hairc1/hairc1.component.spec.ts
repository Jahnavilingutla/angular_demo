import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hairc1Component } from './hairc1.component';

describe('Hairc1Component', () => {
  let component: Hairc1Component;
  let fixture: ComponentFixture<Hairc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hairc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hairc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
