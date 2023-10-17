import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLogoComponent } from './side-logo.component';

describe('SideLogoComponent', () => {
  let component: SideLogoComponent;
  let fixture: ComponentFixture<SideLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
