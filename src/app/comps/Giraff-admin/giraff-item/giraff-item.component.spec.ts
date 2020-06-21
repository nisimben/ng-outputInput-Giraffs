import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiraffItemComponent } from './giraff-item.component';

describe('GiraffItemComponent', () => {
  let component: GiraffItemComponent;
  let fixture: ComponentFixture<GiraffItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraffItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiraffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
