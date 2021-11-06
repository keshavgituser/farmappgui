import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstableComponent } from './adminstable.component';

describe('AdminstableComponent', () => {
  let component: AdminstableComponent;
  let fixture: ComponentFixture<AdminstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
