import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2RegisterComponent } from './navbar2-register.component';

describe('Navbar2RegisterComponent', () => {
  let component: Navbar2RegisterComponent;
  let fixture: ComponentFixture<Navbar2RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar2RegisterComponent]
    });
    fixture = TestBed.createComponent(Navbar2RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
