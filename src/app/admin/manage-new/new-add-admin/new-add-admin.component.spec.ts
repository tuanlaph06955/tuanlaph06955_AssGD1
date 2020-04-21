import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddAdminComponent } from './new-add-admin.component';

describe('NewAddAdminComponent', () => {
  let component: NewAddAdminComponent;
  let fixture: ComponentFixture<NewAddAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAddAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
