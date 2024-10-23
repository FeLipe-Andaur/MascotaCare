import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroGatosPage } from './registro-gatos.page';

describe('RegistroGatosPage', () => {
  let component: RegistroGatosPage;
  let fixture: ComponentFixture<RegistroGatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroGatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
