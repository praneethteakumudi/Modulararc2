import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1ContactComponent } from './navbar1-contact.component';

describe('Navbar1ContactComponent', () => {
  let component: Navbar1ContactComponent;
  let fixture: ComponentFixture<Navbar1ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1ContactComponent]
    });
    fixture = TestBed.createComponent(Navbar1ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
