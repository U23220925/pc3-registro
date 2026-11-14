import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [RegistroComponent] }).compileComponents();
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1. debe crearse', () => expect(component).toBeTruthy());

  it('2. inválido si está vacío', () => expect(component.form.valid).toBeFalsy());

  it('3. email inválido', () => {
    component.form.controls.email.setValue('no-es-email');
    expect(component.form.controls.email.hasError('email')).toBe(true);
  });

  it('4. edad menor a 18 inválida', () => {
    component.form.controls.edad.setValue(17);
    expect(component.form.controls.edad.hasError('min')).toBe(true);
  });

  it('5. válido con datos correctos', () => {
    component.form.setValue({ nombre: 'Juan', email: 'juan@mail.com', edad: 25 });
    expect(component.form.valid).toBe(true);
  });
});
