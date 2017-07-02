import { Fibonacci1 } from './fibonacci1.class';
import { Fibonacci2 } from './fibonacci2.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterators',
  templateUrl: './iterators.component.html',
  styleUrls: ['./iterators.component.css']
})
export class IteratorsComponent implements OnInit {

  constructor() {

    console.log('fibo 1 : ititerator');
    const fibo1 = new Fibonacci1();
    let n = 0;
    while (n < 1000) {
      n = fibo1.next().value;
      console.log(n);
    }


    console.log('fibo 2 : iterable');
    const fibo2 = new Fibonacci2();
    for (const n2 of fibo2) {  // ==> fibo is an inifinite list!
      console.log(n2);
      if (n2 > 1000) {
        break;
      }
    }
  }

  ngOnInit() {

  }

}
