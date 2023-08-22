import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDrawerComponent } from './app-side-drawer.component';

describe('SideDrawerComponent', () => {
  let component: SideDrawerComponent;
  let fixture: ComponentFixture<SideDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideDrawerComponent]
    });
    fixture = TestBed.createComponent(SideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
