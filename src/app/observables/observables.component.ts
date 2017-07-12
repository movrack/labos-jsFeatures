import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fibonacci1 } from './../iterators/fibonacci1.class';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() {

    const observable: Observable<number> = Observable.create(observer => {
      const fibo = new Fibonacci1();
      setInterval(() => {
        const n = fibo.next();
        observer.next(n.value);
        if (n.done) {
          observer.error('Your fibo is not infinite!');
          observer.complete();
        }
      }, 3000);
    });

    let n = 1;
    let count = 0;
    observable.subscribe(
      val => { console.log(count++ + `\t - ${val} \t - Gold number: ${val / n}`); n = val; } ,
      err => console.log(err),
      () => console.log(`fibo is completed!`)
    );
  }

  ngOnInit() {
  }

}
