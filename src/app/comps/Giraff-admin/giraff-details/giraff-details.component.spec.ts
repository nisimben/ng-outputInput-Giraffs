import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiraffDetailsComponent } from './giraff-details.component';

describe('GiraffDetailsComponent', () => {
  let component: GiraffDetailsComponent;
  let fixture: ComponentFixture<GiraffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiraffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
