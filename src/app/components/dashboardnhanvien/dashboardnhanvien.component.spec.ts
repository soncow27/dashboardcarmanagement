import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnhanvienComponent } from './dashboardnhanvien.component';

describe('DashboardnhanvienComponent', () => {
  let component: DashboardnhanvienComponent;
  let fixture: ComponentFixture<DashboardnhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardnhanvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
