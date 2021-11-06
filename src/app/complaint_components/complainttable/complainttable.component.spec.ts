import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainttableComponent } from './complainttable.component';

describe('ComplainttableComponent', () => {
  let component: ComplainttableComponent;
  let fixture: ComponentFixture<ComplainttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
