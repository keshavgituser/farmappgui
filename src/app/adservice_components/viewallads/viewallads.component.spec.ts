import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalladsComponent } from './viewallads.component';

describe('ViewalladsComponent', () => {
  let component: ViewalladsComponent;
  let fixture: ComponentFixture<ViewalladsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalladsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
