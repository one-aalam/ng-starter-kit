import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxLoaderComponent } from './faux-loader.component';

describe('LoaderComponent', () => {
  let component: FauxLoaderComponent;
  let fixture: ComponentFixture<FauxLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FauxLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
