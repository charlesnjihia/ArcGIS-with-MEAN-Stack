import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonorComponent } from './update-donor.component';

describe('UpdateDonorComponent', () => {
  let component: UpdateDonorComponent;
  let fixture: ComponentFixture<UpdateDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
