import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio1Component } from './esercizio1.component';

describe('Esercizio1Component', () => {
  let component: Esercizio1Component;
  let fixture: ComponentFixture<Esercizio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
