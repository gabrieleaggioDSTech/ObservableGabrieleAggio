import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio12Component } from './esercizio12.component';

describe('Esercizio12Component', () => {
  let component: Esercizio12Component;
  let fixture: ComponentFixture<Esercizio12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
