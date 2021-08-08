import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEngineerComponent } from './all-engineer.component';

describe('AllEngineerComponent', () => {
  let component: AllEngineerComponent;
  let fixture: ComponentFixture<AllEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
