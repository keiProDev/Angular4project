import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountsuccessComponent } from './createaccountsuccess.component';

describe('CreateaccountsuccessComponent', () => {
  let component: CreateaccountsuccessComponent;
  let fixture: ComponentFixture<CreateaccountsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccountsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
