import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import helper from './helper';

let liveStreaming$ = interval(1000).pipe(
  take(5)
);

liveStreaming$.subscribe(
  (val) => helper.addItem(`第一個 observer: ${val}`),
  error => console.error(error),
  () => helper.addItem(`第一個 observer complete`)
);

setTimeout(() => {
  liveStreaming$.subscribe( 
    (val) => helper.addItem(`第二個 observer: ${val}`),
    error => console.error(error),
    () => helper.addItem(`第二個 observer complete`)
  ) 
},2000)