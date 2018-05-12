import { of } from 'rxjs';
import { map } from "rxjs/operators";
import helper from './helper';

let stream$ = of(1,2,3).pipe(
  map(x => x + '!!!')
) 

stream$.subscribe((val) => {
  console.log(val) // 1!!! 2!!! 3!!!
})