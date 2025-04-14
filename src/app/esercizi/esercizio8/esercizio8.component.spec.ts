import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio8Component } from './esercizio8.component';

describe('Esercizio8Component', () => {
  let component: Esercizio8Component;
  let fixture: ComponentFixture<Esercizio8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
