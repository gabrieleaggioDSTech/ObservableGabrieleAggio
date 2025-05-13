import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestModule } from '../esercizi.spec.utils';
import { Esercizio2Component } from './esercizio2.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { of } from 'rxjs';

describe('Esercizio2Component', () => {
  let component: Esercizio2Component;
  let fixture: ComponentFixture<Esercizio2Component>;

  let service: EserciziService;

  beforeEach(async () => {
    await configureTestModule(Esercizio2Component);
    fixture = TestBed.createComponent(Esercizio2Component);
    service = TestBed.inject(EserciziService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Dovrebbe sottoscriversi a observer component1', () => {
    const observable = [1, 2, 3];

    //Mock del creaObservableEsericizio1
    spyOn(service, 'creaObservableEsercizio1').and.returnValue(
      of(...observable)
    );

    const logSpy = spyOn(console, 'log');

    service.creaObserverEsercizio2();

    expect(service.creaObservableEsercizio1).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('valore ricevuto: ', 1);
    expect(logSpy).toHaveBeenCalledWith('valore ricevuto: ', 2);
    expect(logSpy).toHaveBeenCalledWith('valore ricevuto: ', 3);
    expect(logSpy).toHaveBeenCalledWith('Observable completato');
  });
});
