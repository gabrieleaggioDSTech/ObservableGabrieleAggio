import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio10Component } from './esercizio10.component';

describe('Esercizio10Component', () => {
  let component: Esercizio10Component;
  let fixture: ComponentFixture<Esercizio10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
