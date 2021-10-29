import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadvertiseComponent } from './viewadvertise.component';

describe('ViewadvertiseComponent', () => {
  let component: ViewadvertiseComponent;
  let fixture: ComponentFixture<ViewadvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewadvertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
