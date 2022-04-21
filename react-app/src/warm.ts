import { interval } from 'rxjs';
import { take, publish, refCount } from 'rxjs/operators';
import helper from './helper';

let publisher$ = interval(1000).pipe(
  take(5),
  publish(),
  refCount()
);
setTimeout(() => {
  publisher$.subscribe(
    (val) => helper.addItem(`第一個 observer: ${val}`),
    error => console.error(error),
    () => helper.addItem(`第一個 observer complete`)
  );
}, 1100);

setTimeout(() => {
  publisher$.subscribe( 
    (val) => helper.addItem(`第二個 observer: ${val}`),
    error => console.error(error),
    () => helper.addItem(`第二個 observer complete`)
  ) 
}, 3100);