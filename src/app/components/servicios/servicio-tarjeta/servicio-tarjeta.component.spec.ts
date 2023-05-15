import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioTarjetaComponent } from './servicio-tarjeta.component';

describe('ServicioTarjetaComponent', () => {
  let component: ServicioTarjetaComponent;
  let fixture: ComponentFixture<ServicioTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
