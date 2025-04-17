import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio15Component } from './esercizio15.component';

describe('Esercizio15Component', () => {
  let component: Esercizio15Component;
  let fixture: ComponentFixture<Esercizio15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
