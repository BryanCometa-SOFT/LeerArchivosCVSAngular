import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCertificatesComponent } from './form-certificates.component';

describe('FormCertificatesComponent', () => {
  let component: FormCertificatesComponent;
  let fixture: ComponentFixture<FormCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
