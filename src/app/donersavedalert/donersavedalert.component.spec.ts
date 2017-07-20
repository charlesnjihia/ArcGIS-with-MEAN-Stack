import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonersavedalertComponent } from './donersavedalert.component';

describe('DonersavedalertComponent', () => {
  let component: DonersavedalertComponent;
  let fixture: ComponentFixture<DonersavedalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonersavedalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonersavedalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
