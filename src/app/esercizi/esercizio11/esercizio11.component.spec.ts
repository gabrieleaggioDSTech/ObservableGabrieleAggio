import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio11Component } from './esercizio11.component';

describe('Esercizio11Component', () => {
  let component: Esercizio11Component;
  let fixture: ComponentFixture<Esercizio11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
