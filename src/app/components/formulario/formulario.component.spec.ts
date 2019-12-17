import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(FormularioComponent);

        component = fixture.componentInstance; // ContactComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  it('should create the formulario component', () => {
    expect(component).toBeTruthy();
  });

  it(`should call the guardar datos method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'guardardatos');
    el = fixture.debugElement.query(By.css('.btn')).nativeElement;
    el.click();
    expect(component.guardardatos).toHaveBeenCalledTimes(1);
  }));


  it(`form should be invalid`, async(() => {
    component.ngOnInit();
    component.formGroup.get('email').setValue('');
    component.formGroup.get('nombre').setValue('');
    component.formGroup.get('apellido').setValue('');
    component.formGroup.get('password').setValue('');


    expect(component.formGroup.valid).toBeFalsy();
  }));



});
