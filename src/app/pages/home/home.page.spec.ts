import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SeleccionMascota } from './home.page'; // Usa el nombre correcto del componente

describe('SeleccionMascota', () => {
  let component: SeleccionMascota;
  let fixture: ComponentFixture<SeleccionMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeleccionMascota], // Usa el nombre correcto del componente
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionMascota); // Usa el nombre correcto del componente
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
