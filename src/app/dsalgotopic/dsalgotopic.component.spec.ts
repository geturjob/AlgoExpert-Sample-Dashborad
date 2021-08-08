import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsalgotopicComponent } from './dsalgotopic.component';

describe('DsalgotopicComponent', () => {
  let component: DsalgotopicComponent;
  let fixture: ComponentFixture<DsalgotopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsalgotopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsalgotopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
