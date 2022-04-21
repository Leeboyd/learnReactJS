import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import helper from './helper';

let stream$ = Observable.create((observer) => {
  observer.next( 1 );
  observer.next( 2 );
  observer.next( 3 );
  observer.complete();
}).pipe(
  share()
);
setTimeout(() => {
  stream$.subscribe(
    (val) => helper.addItem(`第一個 observer: ${val}`),
    error => console.error(error),
    () => helper.addItem(`第一個 observer complete`)
  );
}, 1200)

setTimeout(() => {
  stream$.subscribe(
    (val) => helper.addItem(`第二個 observer: ${val}`),
    error => console.error(error),
    () => helper.addItem(`第二個 observer complete`)
  );
}, 2200)