import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerstableComponent } from './dealerstable.component';

describe('DealerstableComponent', () => {
  let component: DealerstableComponent;
  let fixture: ComponentFixture<DealerstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
