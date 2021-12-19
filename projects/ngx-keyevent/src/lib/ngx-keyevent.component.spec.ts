import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKeyEventDirective } from './ngx-keyevent.directive';

describe('NgxKeyeventComponent', () => {
  let component: NgxKeyEventDirective;
  let fixture: ComponentFixture<NgxKeyEventDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKeyEventDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyEventDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
