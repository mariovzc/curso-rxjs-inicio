import { of, range, asyncScheduler } from "rxjs";

//const src$ = of(1,2,3,4,5);
// asyncScheduler vuelte todo lo sincrono asincroni
const src$ = range(1,5, asyncScheduler);

console.log("inicio")
src$.subscribe(console.log)
console.log("fin")
