import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseActivityComponent } from './base-activity.component';

describe('BaseActivityComponent', () => {
  let component: BaseActivityComponent;
  let fixture: ComponentFixture<BaseActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
