import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActiveComponent } from './non-active.component';

describe('NonActiveComponent', () => {
  let component: NonActiveComponent;
  let fixture: ComponentFixture<NonActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
