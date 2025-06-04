import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2ContactComponent } from './navbar2-contact.component';

describe('Navbar2ContactComponent', () => {
  let component: Navbar2ContactComponent;
  let fixture: ComponentFixture<Navbar2ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar2ContactComponent]
    });
    fixture = TestBed.createComponent(Navbar2ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
