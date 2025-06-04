import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar3ContactComponent } from './navbar3-contact.component';

describe('Navbar3ContactComponent', () => {
  let component: Navbar3ContactComponent;
  let fixture: ComponentFixture<Navbar3ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar3ContactComponent]
    });
    fixture = TestBed.createComponent(Navbar3ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
