import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar3RegisterComponent } from './navbar3-register.component';

describe('Navbar3RegisterComponent', () => {
  let component: Navbar3RegisterComponent;
  let fixture: ComponentFixture<Navbar3RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar3RegisterComponent]
    });
    fixture = TestBed.createComponent(Navbar3RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
