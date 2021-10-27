import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementformComponent } from './advertisementform.component';

describe('AdvertisementformComponent', () => {
  let component: AdvertisementformComponent;
  let fixture: ComponentFixture<AdvertisementformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
