import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1RegisterComponent } from './navbar1-register.component';

describe('Navbar1RegisterComponent', () => {
  let component: Navbar1RegisterComponent;
  let fixture: ComponentFixture<Navbar1RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1RegisterComponent]
    });
    fixture = TestBed.createComponent(Navbar1RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
