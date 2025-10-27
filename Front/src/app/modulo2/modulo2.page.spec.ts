import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modulo2Page } from './modulo2.page';

describe('Modulo2Page', () => {
  let component: Modulo2Page;
  let fixture: ComponentFixture<Modulo2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
