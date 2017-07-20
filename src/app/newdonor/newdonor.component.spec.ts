import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdonorComponent } from './newdonor.component';

describe('NewdonorComponent', () => {
  let component: NewdonorComponent;
  let fixture: ComponentFixture<NewdonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
