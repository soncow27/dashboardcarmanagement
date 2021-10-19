import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhopdongComponent } from './dashboardhopdong.component';

describe('DashboardhopdongComponent', () => {
  let component: DashboardhopdongComponent;
  let fixture: ComponentFixture<DashboardhopdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardhopdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardhopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
