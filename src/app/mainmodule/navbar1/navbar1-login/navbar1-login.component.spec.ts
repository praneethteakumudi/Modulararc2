import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1LoginComponent } from './navbar1-login.component';

describe('Navbar1LoginComponent', () => {
  let component: Navbar1LoginComponent;
  let fixture: ComponentFixture<Navbar1LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1LoginComponent]
    });
    fixture = TestBed.createComponent(Navbar1LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
