import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdealerformComponent } from './newdealerform.component';

describe('NewdealerformComponent', () => {
  let component: NewdealerformComponent;
  let fixture: ComponentFixture<NewdealerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdealerformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdealerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
