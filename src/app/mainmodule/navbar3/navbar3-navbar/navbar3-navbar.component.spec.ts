import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar3NavbarComponent } from './navbar3-navbar.component';

describe('Navbar3NavbarComponent', () => {
  let component: Navbar3NavbarComponent;
  let fixture: ComponentFixture<Navbar3NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar3NavbarComponent]
    });
    fixture = TestBed.createComponent(Navbar3NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
