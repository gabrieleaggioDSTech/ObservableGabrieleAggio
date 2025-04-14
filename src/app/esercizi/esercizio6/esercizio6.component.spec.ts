import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio6Component } from './esercizio6.component';

describe('Esercizio6Component', () => {
  let component: Esercizio6Component;
  let fixture: ComponentFixture<Esercizio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
