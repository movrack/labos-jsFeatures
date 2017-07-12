import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generators',
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.css']
})
export class GeneratorsComponent {

  private counterGenerator = this.infiniteSequence();
  private counterValue = 0;
  constructor() {
    const g = this.generator();
    console.log('c1');
    console.log(g.next('v1'));
    console.log('c2');
    console.log(g.next('v2'));
    console.log('c3');
    console.log(g.next('v3'));
    console.log('c4');
    console.log(g.next('v4'));
    console.log('c5');
    console.log(g.next('v5'));
    console.log('c6');
  }

  * generator() {
      let v;
      console.log('g1 ' + v);
      // compute 1 …
      v = yield 'data1';
      console.log('g2 ' + v);

      // compute 2 …
      v = yield 'data2';
      console.log('g3 ' + v);

      // compute 3
      v = yield* [1, 2];
      console.log('g4 ' + v);
  }

  * infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
  }


  click() {
    const x = this.counterGenerator.next();
    this.counterValue = x.value;
  }
}
