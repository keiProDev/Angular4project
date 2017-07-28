import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewaccountComponent } from './createnewaccount.component';

describe('CreatenewaccountComponent', () => {
  let component: CreatenewaccountComponent;
  let fixture: ComponentFixture<CreatenewaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
