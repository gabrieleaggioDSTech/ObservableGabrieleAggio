import { Injectable } from '@angular/core';
import { Observable, Subject, throwError, Observer, from, fromEvent, of, interval } from 'rxjs';
import { filter, first, last, map, skip, takeLast, takeUntil, catchError, findIndex } from 'rxjs/operators';
import { Esercizio } from '../model/esericzio.model';

@Injectable({
  providedIn: 'root'
})
export class EserciziService {

  constructor() { }

  getEsercizi(): Esercizio[] {
    return [
      { id: 1, titolo: 'Observable 1', descrizione: '', path: 'esercizio1' },
      { id: 2, titolo: 'Observable 2', descrizione: '', path: 'esercizio2' },
      { id: 3, titolo: 'Observable 3', descrizione: '', path: 'esercizio3' },
      { id: 4, titolo: 'Observable 4', descrizione: '', path: 'esercizio4' },
      { id: 5, titolo: 'Observable 5', descrizione: '', path: 'esercizio5' },
      { id: 6, titolo: 'Observable 6', descrizione: '', path: 'esercizio6' },
      { id: 7, titolo: 'Observable 7', descrizione: '', path: 'esercizio7' },
      { id: 8, titolo: 'Observable 8', descrizione: '', path: 'esercizio8' },
      { id: 9, titolo: 'Observable 9', descrizione: '', path: 'esercizio9' },
      { id: 10, titolo: 'Observable 10', descrizione: '', path: 'esercizio10' },
      { id: 11, titolo: 'Observable 11', descrizione: '', path: 'esercizio11' },
      { id: 12, titolo: 'Observable 12', descrizione: '', path: 'esercizio12' },
      { id: 13, titolo: 'Observable 13', descrizione: '', path: 'esercizio13' }
    ];
  }
  

  // Esercizio 1: Creazione di un Observable
  //https://www.tektutorialshub.com/angular/rxjs-observable-using-create-of-from-in-angular/
  creaObservableEsercizio1(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
  }

  // Esercizio 2: Observer e sottoscrizione
  creaObserverEsercizio2(): void {
    
    const observable = this.creaObservableEsercizio1();

    const observer: Partial<Observer<number>> = {
        next: val => console.log('valore ricevuto: ', val),
        complete: () => console.log('Observable completato')
    };

    observable.subscribe(observer);
  }

  // Esercizio 3: from array di stringhe
  //https://rxjs.dev/api/index/function/from
  creaObservableEsercizio3(): void {
    const frutti: string[] = ['mela', 'banana', 'arancia', 'susina'];
    const observable = from(frutti);

    observable.subscribe({
      next: x => console.log('Frutto: ', x),
      complete: () => console.log('observable completato')
    });
  }

  // Esercizio 4: fromEvent su un button
  creaObservableEsercizio4(): Observable<Event> {
    const bottone = document.getElementById('myButton');
    if(!bottone) throw new Error('Elemento myButton non esiste');

    //Ritorniamo un Observables che emette ogni volta che facciamo click sul bottone
    return fromEvent(bottone, 'click'); 
  }

  // Esercizio 5: map da 1 a 5 * 10
  creaObservableEsercizio5(): Observable<number> {
    //pipe si usa sugli oservables per applicare operatori in sequenza
    return of(1,2,3,4,5).pipe(
      map( n => n * 10)
    );
  }

  // Esercizio 6: filter numeri pari
  creaObservableEsercizio6(): Observable<number> {
    return of(1,2,3,4,5,6,7,8,9,10).pipe(
      filter(x => x % 2 == 0)
    );
  }

  // Esercizio 7: takeLast(2)
  creaObservableEsercizio7(): Observable<number> {
    return of(1,2,3,4,5,6,7).pipe(
      takeLast(2)
    );
  }

  // Esercizio 8: takeUntil con timer e subject
  creaObservableEsercizio8(): { source$: Observable<number>, stopper$: Subject<void> } {
    
    const stopper$ = new Subject<void>();

    const source$ = interval(1000).pipe(
      takeUntil(stopper$)
    );
    return { source$, stopper$ }
    
  }

  // Esercizio 9: skip(1)
  creaObservableEsercizio9(): Observable<number> {
    return of(1,2,3,4,5).pipe(
      skip(1)
    );
  }

  // Esercizio 10: first()
  creaObservableEsercizio10(): Observable<string> {
    return of("apple", "banana", "cherry").pipe(
      first()
    );
  }

  // Esercizio 11: last()
  creaObservableEsercizio11(): Observable<string> {
    return of("apple", "banana", "cherry").pipe(
      last()
    );
  }
  // Esercizio 12: catchError
  creaObservableEsercizio12(): Observable<string> {
    return throwError(() => new Error('Errore simulato')).pipe(
      catchError(err => {
        console.error('Errore catturato:', err.message);
        return of('Valore di Fallback');
      })
    );
  }

  // Esercizio 13: findIndex
  creaObservableEsercizio13(): Observable<number> {
    return of(5, 15, 10).pipe(
      findIndex(x => x > 12)
    );
  }
}
