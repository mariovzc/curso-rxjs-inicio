import { Observable, Observer  } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next: ', value),
  error: error => console.error('Error: ', error),
  complete: () => console.info("completado"),
}


const intervalo$ = new Observable<number>( suscriber => {

  // crear contador
  let counter = 0;

  const interval = setInterval(() =>{
    suscriber.next(counter);
    counter++;
    console.log(counter);

    //if (counter == 5) suscriber.complete();
  }, 1000);

  setTimeout(() => {
    suscriber.complete();
  }, 2500);

  // Ejecutar al terminar un observable
  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  }
});


const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2)
    .add(subs3)

setTimeout(()=>{
  subs.unsubscribe();
  //subs2.unsubscribe();
  //subs3.unsubscribe();
  console.log("completado timeout")
}, 3000)
