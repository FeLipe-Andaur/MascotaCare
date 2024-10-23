import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfermedadesComunesPage } from './enfermedades-comunes.page';

describe('EnfermedadesComunesPage', () => {
  let component: EnfermedadesComunesPage;
  let fixture: ComponentFixture<EnfermedadesComunesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadesComunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
