import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentroAsistenciaPage } from './centro-asistencia.page';

describe('CentroAsistenciaPage', () => {
  let component: CentroAsistenciaPage;
  let fixture: ComponentFixture<CentroAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
