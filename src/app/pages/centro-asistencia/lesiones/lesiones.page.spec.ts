import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LesionesPage } from './lesiones.page';

describe('LesionesPage', () => {
  let component: LesionesPage;
  let fixture: ComponentFixture<LesionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LesionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
