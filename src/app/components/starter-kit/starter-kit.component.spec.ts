import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterKitComponent } from './starter-kit.component';

describe('StarterKitComponent', () => {
    let component: StarterKitComponent;
    let fixture: ComponentFixture<StarterKitComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StarterKitComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StarterKitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
