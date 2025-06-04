import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2AboutComponent } from './navbar2-about.component';

describe('Navbar2AboutComponent', () => {
  let component: Navbar2AboutComponent;
  let fixture: ComponentFixture<Navbar2AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar2AboutComponent]
    });
    fixture = TestBed.createComponent(Navbar2AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
