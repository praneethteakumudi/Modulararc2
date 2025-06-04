import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1AboutComponent } from './navbar1-about.component';

describe('Navbar1AboutComponent', () => {
  let component: Navbar1AboutComponent;
  let fixture: ComponentFixture<Navbar1AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1AboutComponent]
    });
    fixture = TestBed.createComponent(Navbar1AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
