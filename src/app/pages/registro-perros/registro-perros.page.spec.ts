import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPerrosPage } from './registro-perros.page';

describe('RegistroPerrosPage', () => {
  let component: RegistroPerrosPage;
  let fixture: ComponentFixture<RegistroPerrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPerrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
