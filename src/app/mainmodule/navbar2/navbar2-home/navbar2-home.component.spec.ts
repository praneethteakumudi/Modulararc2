import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2HomeComponent } from './navbar2-home.component';

describe('Navbar2HomeComponent', () => {
  let component: Navbar2HomeComponent;
  let fixture: ComponentFixture<Navbar2HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar2HomeComponent]
    });
    fixture = TestBed.createComponent(Navbar2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
