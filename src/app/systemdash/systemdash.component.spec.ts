import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemdashComponent } from './systemdash.component';

describe('SystemdashComponent', () => {
  let component: SystemdashComponent;
  let fixture: ComponentFixture<SystemdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
