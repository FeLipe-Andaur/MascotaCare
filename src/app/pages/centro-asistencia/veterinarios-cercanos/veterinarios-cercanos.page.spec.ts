import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeterinariosCercanosPage } from './veterinarios-cercanos.page';

describe('VeterinariosCercanosPage', () => {
  let component: VeterinariosCercanosPage;
  let fixture: ComponentFixture<VeterinariosCercanosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariosCercanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
