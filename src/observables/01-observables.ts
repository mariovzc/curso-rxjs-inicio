import { Observable, Observer  } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]', value),
  error: error => console.error('error [obs] ', error),
  complete: () => console.info("completado [obs]"),
}


const obs$ = new Observable<string>( subscriber =>{
  // emitir el valor
  subscriber.next('hola');

  // Forzar Error
  //const a = undefined;
  //a.nombre = 'mario';

  // Terminamos de emitir
  subscriber.complete();
});

obs$.subscribe( observer );

// obs$.subscribe( resp => console.log(resp) );
//obs$.subscribe( console.log );

/* obs$.subscribe( 
  valor => console.log("next: ", valor),
  error => console.warn('error:', error),
  () => console.info('completado'),
) */;


