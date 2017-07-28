import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordlinkComponent } from './passwordlink.component';

describe('PasswordlinkComponent', () => {
  let component: PasswordlinkComponent;
  let fixture: ComponentFixture<PasswordlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
