import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1NavbarComponent } from './navbar1-navbar.component';

describe('Navbar1NavbarComponent', () => {
  let component: Navbar1NavbarComponent;
  let fixture: ComponentFixture<Navbar1NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1NavbarComponent]
    });
    fixture = TestBed.createComponent(Navbar1NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
