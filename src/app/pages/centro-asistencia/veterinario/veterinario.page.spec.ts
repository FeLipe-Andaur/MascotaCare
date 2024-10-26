import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeterinarioPage } from './veterinario.page';

describe('VeterinarioPage', () => {
  let component: VeterinarioPage;
  let fixture: ComponentFixture<VeterinarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
