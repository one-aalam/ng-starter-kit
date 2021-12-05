import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProgressComponent } from './nav-progress.component';

describe('NavProgressComponent', () => {
  let component: NavProgressComponent;
  let fixture: ComponentFixture<NavProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
