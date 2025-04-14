import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio5Component } from './esercizio5.component';

describe('Esercizio5Component', () => {
  let component: Esercizio5Component;
  let fixture: ComponentFixture<Esercizio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
