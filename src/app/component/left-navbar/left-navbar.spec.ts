import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavbar } from './left-navbar';

describe('LeftNavbar', () => {
  let component: LeftNavbar;
  let fixture: ComponentFixture<LeftNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
