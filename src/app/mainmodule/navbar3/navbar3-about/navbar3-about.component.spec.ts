import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar3AboutComponent } from './navbar3-about.component';

describe('Navbar3AboutComponent', () => {
  let component: Navbar3AboutComponent;
  let fixture: ComponentFixture<Navbar3AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar3AboutComponent]
    });
    fixture = TestBed.createComponent(Navbar3AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
