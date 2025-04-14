import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio7Component } from './esercizio7.component';

describe('Esercizio7Component', () => {
  let component: Esercizio7Component;
  let fixture: ComponentFixture<Esercizio7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
