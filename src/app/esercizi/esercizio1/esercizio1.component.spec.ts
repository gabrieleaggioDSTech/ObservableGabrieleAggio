import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader, TranslateService, TranslateFakeLoader } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { EserciziService } from 'src/app/services/esercizi.service';
import { of } from 'rxjs';

import { Esercizio1Component } from './esercizio1.component';

describe('Esercizio1Component', () => {
  let component: Esercizio1Component;
  let fixture: ComponentFixture<Esercizio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Esercizio1Component],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        {
          provide: EserciziService,
          useValue: {
            creaObservableEsercizio1: () => of(1, 2, 3) // mock
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Esercizio1Component);
    component = fixture.componentInstance;

    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('it', {
      TESTO_ESE: 'Testo esercizio',
      ES1_DESC: 'Descrizione finta',
      ESERCIZIO: 'Esercizio'
    });
    translate.use('it');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe mostrare "Esercizio 1" nel titolo', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('1');
  });

  it('dovrebbe contenere la descrizione tradotta', () => {
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toContain('Testo esercizio');
  });

  it('dovrebbe aggiornare l\'output quando clicco "Avvia"', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const pre = fixture.nativeElement.querySelector('pre');
    expect(pre.textContent).toContain('Valore ricevuto: 1');
    expect(pre.textContent).toContain('Valore ricevuto: 2');
    expect(pre.textContent).toContain('Valore ricevuto: 3');
    expect(pre.textContent).toContain('Observable completato');
  });
});
