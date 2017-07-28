import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineshiftComponent } from './declineshift.component';

describe('DeclineshiftComponent', () => {
  let component: DeclineshiftComponent;
  let fixture: ComponentFixture<DeclineshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclineshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
