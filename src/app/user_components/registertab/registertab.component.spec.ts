import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertabComponent } from './registertab.component';

describe('RegistertabComponent', () => {
  let component: RegistertabComponent;
  let fixture: ComponentFixture<RegistertabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistertabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
