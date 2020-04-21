import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetailAdminComponent } from './new-detail-admin.component';

describe('NewDetailAdminComponent', () => {
  let component: NewDetailAdminComponent;
  let fixture: ComponentFixture<NewDetailAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDetailAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
