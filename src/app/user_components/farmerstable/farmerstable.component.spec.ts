import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerstableComponent } from './farmerstable.component';

describe('FarmerstableComponent', () => {
  let component: FarmerstableComponent;
  let fixture: ComponentFixture<FarmerstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
