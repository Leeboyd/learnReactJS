import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, filter } from 'rxjs/operators'
import helper from './helper';

let stream$ = of(1,2,3,4,5).pipe(
  tap((x) => {
    helper.addItem(`tap ${x}`)
  }),
  filter((value) => {
    return value % 2 === 0;
  })
);

stream$.subscribe((value) => {
  helper.addItem(`value ${value}`)
})