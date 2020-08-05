import { interval, timer } from 'rxjs';

const observer = {
  next: val => console.log("next: ", val),
  complete: () => console.log("completed")
}


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// Sirve para ejecutar cosas cada cierto tiempo
const timer$ = timer(hoyEn5)
console.log("Inicio")
//interval$.subscribe(observer)

// Este se completa solo
timer$.subscribe(observer)
console.log("Fin")