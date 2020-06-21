import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiraffPageComponent } from './giraff-page.component';

describe('GiraffPageComponent', () => {
  let component: GiraffPageComponent;
  let fixture: ComponentFixture<GiraffPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraffPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiraffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
