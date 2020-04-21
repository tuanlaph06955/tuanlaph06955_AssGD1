import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBannerComponent } from './manager-banner.component';

describe('ManagerBannerComponent', () => {
  let component: ManagerBannerComponent;
  let fixture: ComponentFixture<ManagerBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
