import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modulo3Page } from './modulo3.page';

describe('Modulo3Page', () => {
  let component: Modulo3Page;
  let fixture: ComponentFixture<Modulo3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
