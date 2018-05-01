import { Observable } from 'rxjs';

import helper from './helper';

var observable = Observable.create((observer: any) => {
  // observer.next('Hey guys!')
  // observer.next('How are you?')
  // observer.complete()
  // observer.next('This will not send')
  try {
    observer.next('Step 1');
    observer.next('Step 2');
    if (Math.floor(Math.random() * 10) > 9) {
      throw new Error ('Error Step 3');
    }
    setInterval(() => {
      observer.next('兩秒一個')
    }, 2000)
    // observer.complete()
  } catch (error) {
    observer.error(error)
  }
});

let observer = observable.subscribe(
  (x: any) => helper.addItem(x),
  (error: Error) => console.error(error),
  () => helper.addItem('Completed')
);


// Creating Multiple Subscriptions
let observer2 = observable.subscribe(
  (x:any) => helper.addItem(`第二個 observer ${x}`),
  (error: Error) => console.error(error),
  () => helper.addItem(`第二個 observer Completed`)
);

// Child Subscriptions
observer.add(observer2);

// Remove Child Subscriptions
// observer.remove(observer2)

setTimeout(() => {
  // observer.complete();
  
  observer.unsubscribe();
}, 4000);