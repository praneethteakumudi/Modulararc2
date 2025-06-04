import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar3LoginComponent } from './navbar3-login.component';

describe('Navbar3LoginComponent', () => {
  let component: Navbar3LoginComponent;
  let fixture: ComponentFixture<Navbar3LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar3LoginComponent]
    });
    fixture = TestBed.createComponent(Navbar3LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
