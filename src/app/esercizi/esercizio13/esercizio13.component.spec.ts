import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio13Component } from './esercizio13.component';

describe('Esercizio13Component', () => {
  let component: Esercizio13Component;
  let fixture: ComponentFixture<Esercizio13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
