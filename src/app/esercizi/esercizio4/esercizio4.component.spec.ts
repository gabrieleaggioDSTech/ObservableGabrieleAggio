import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio4Component } from './esercizio4.component';

describe('Esercizio4Component', () => {
  let component: Esercizio4Component;
  let fixture: ComponentFixture<Esercizio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
