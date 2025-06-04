import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar3HomeComponent } from './navbar3-home.component';

describe('Navbar3HomeComponent', () => {
  let component: Navbar3HomeComponent;
  let fixture: ComponentFixture<Navbar3HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar3HomeComponent]
    });
    fixture = TestBed.createComponent(Navbar3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
