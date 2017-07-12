import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrls: ['./destructuring.component.css']
})
export class DestructuringComponent implements OnInit {

  constructor() {
    let a, b, rest;
    const spread = [ 60, 70];
    [a, b, ...rest] = [10, 20, 30, 40, 50, ...spread];

    console.log('a ' + a); // 1
    console.log('b ' + b); // 7
    console.log('rest ' + rest); // [30, 40, 50]

  }

  ngOnInit() {
  }

}
