## Observable Anatomy

An observable's subscribe method has the following signature

```
stream.subscribe(fnValue, fnError, fnComplete)
```

## Observer
Note the following code example creating an Observable

```ts
import { Observable } from 'rxjs';

let stream$ = Observable.create((observer) => {
  observer.next(4);
})

var stream$ = Observable.create((observer: any) => {
  try {
    observer.next('1');

    if (Math.floor(Math.random() * 10) > 9) {
      throw new Error ('error');
    }

    observer.complete('2')

  } catch (error) {
    observer.error(error)
  }
});
```

`create` method takes a function with an input parameter `observer`.

An Observer is just an object with the following methods `next` `error` `complete`

```ts
observer.next(1);
observer.error('some error')
observer.complete();
```
