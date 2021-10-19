import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardxeComponent } from './dashboardxe.component';

describe('DashboardxeComponent', () => {
  let component: DashboardxeComponent;
  let fixture: ComponentFixture<DashboardxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
