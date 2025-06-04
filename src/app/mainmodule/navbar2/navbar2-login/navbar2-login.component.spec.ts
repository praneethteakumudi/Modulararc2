import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2LoginComponent } from './navbar2-login.component';

describe('Navbar2LoginComponent', () => {
  let component: Navbar2LoginComponent;
  let fixture: ComponentFixture<Navbar2LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar2LoginComponent]
    });
    fixture = TestBed.createComponent(Navbar2LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
