import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtaquesPage } from './ataques.page';

describe('AtaquesPage', () => {
  let component: AtaquesPage;
  let fixture: ComponentFixture<AtaquesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
