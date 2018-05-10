import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import helper from './helper';
let observable = interval(1000).pipe(take(5))


let subscription = observable.subscribe(
  (x: any) => helper.addItem(`第一個 observer ${x}`),
  (error: any) => console.error(error),
  () =>  helper.addItem(`第一個 observer Completed`)
)

setTimeout(() => {
  let subscription2 = observable.subscribe(
    (x: any) => helper.addItem(`第二個 observer ${x}`),
    (error: Error) => console.error(error),
    () => helper.addItem(`第二個 observer Completed`)
  )
}, 6000)