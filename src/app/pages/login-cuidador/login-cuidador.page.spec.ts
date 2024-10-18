import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCuidadorPage } from './login-cuidador.page';

describe('LoginCuidadorPage', () => {
  let component: LoginCuidadorPage;
  let fixture: ComponentFixture<LoginCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
