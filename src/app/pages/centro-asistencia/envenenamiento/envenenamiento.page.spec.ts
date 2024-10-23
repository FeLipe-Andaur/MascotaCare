import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvenenamientoPage } from './envenenamiento.page';

describe('EnvenenamientoPage', () => {
  let component: EnvenenamientoPage;
  let fixture: ComponentFixture<EnvenenamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvenenamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
