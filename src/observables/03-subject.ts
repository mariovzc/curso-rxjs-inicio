import { Observable, Observer, Subject  } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.error('Error: ', error),
  complete: () => console.info("completado"),
}

const intervalo$ = new Observable<number>( subscriber => {


  const intervalId = setInterval(
    () => subscriber.next(Math.random()), 3000
  );


  return () => {
    clearInterval(intervalId);
    console.log("Intervalo destruido");
  };

})

/** 
 *  1- Casteo multiple: muchas suscripciones pueden estar en este subject
 *  2- Es un Observer
 *  3- se puede manejar el Next,Error, Complete
*/

const subject$ = new Subject();
const susbcription = intervalo$.subscribe( subject$ );

// El valor es igual para ambos
const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

// COLD OBSERVABLE == cuando la data es producida internamente

// HOT OBSERVABLE == cuando se produce por fuera

setTimeout(() => {
  subject$.next("10");
  subject$.complete();
  susbcription.unsubscribe();
}, 3500)

/* const subs1 = intervalo$.subscribe(rnd => console.log('subs1: ', rnd))
const subs2 = intervalo$.subscribe(rnd => console.log('subs2: ', rnd) )*/