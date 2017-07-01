import { Fibonacci } from './fibonacci.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterators',
  templateUrl: './iterators.component.html',
  styleUrls: ['./iterators.component.css']
})
export class IteratorsComponent implements OnInit {

  constructor() {

    const fibo = new Fibonacci();

    for (const n of fibo) {
      console.log(n);
      if (n > 1000) {
        break;
      }
    }
  }

  ngOnInit() {

  }

}
