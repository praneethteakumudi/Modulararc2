import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1HomeComponent } from './navbar1-home.component';

describe('Navbar1HomeComponent', () => {
  let component: Navbar1HomeComponent;
  let fixture: ComponentFixture<Navbar1HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1HomeComponent]
    });
    fixture = TestBed.createComponent(Navbar1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
