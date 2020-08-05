import { of } from 'rxjs';

// Permite cualquier tipo
/* const obs$ = of(
  [1,2],
  {a:1, b:2},
  function() {},
  true,
  Promise.resolve(true)
); */


const obs$ = of<number>(...[1,2,3],4,5,6,7)

console.log("inicio del obs")
obs$.subscribe( 
  next => console.log('next: ', next),
  null,
  () => console.log("Terminamos la secuencia")
)

console.log("Fin del obs")
