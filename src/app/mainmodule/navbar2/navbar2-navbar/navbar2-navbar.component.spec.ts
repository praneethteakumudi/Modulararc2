import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2NavbarComponent } from './navbar2-navbar.component';

describe('Navbar2NavbarComponent', () => {
  let component: Navbar2NavbarComponent;
  let fixture: ComponentFixture<Navbar2NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar2NavbarComponent]
    });
    fixture = TestBed.createComponent(Navbar2NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
