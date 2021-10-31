import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerdashboardComponent } from './dealerdashboard.component';

describe('DealerdashboardComponent', () => {
  let component: DealerdashboardComponent;
  let fixture: ComponentFixture<DealerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
