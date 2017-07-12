import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() {
    console.log('before promise call');
    const p = this.longAdd(2, 3)
    .then((addResult) => {
      console.info('then result');
      console.log(addResult);
      return this.longMultiply(addResult, 2);
    })
    .then((multResult) => {
      console.info('then result');
      console.log(multResult);
      return this.longBadDivide(multResult);
    })
    .then((devideResult) => {
      console.info('then result');
      console.log(devideResult);
    }).catch((error) => {
      console.warn('fverdom! Got an error! ' + error);
    });
    console.log('after promise call');

  }

  ngOnInit() {
  }

  longAdd(v1, v2): Promise<number> {
    return new Promise((r, e) => {
      console.log('it\'s hard to compute. Need more time...');
      setTimeout(() => {
        const res = v1 + v2;
        console.log('value computed. Resolve it.');
        r(res);
      }, 5000);
    });
  }

  longMultiply(v1, v2): Promise<number> {
    return new Promise((r, e) => {
      console.log('it\'s hard to multiply. Need more time...');
      setTimeout(() => {
        const res = v1 * v2;
        console.log('value multiplied. Resolve it.');
        r(res);
      }, 5000);
    });
  }

  longBadDivide(v1): Promise<number> {
  return new Promise((r, e) => {
        console.log('it\'s hard to devide. Need more time...');
        setTimeout(() => {
          const res = v1 / 0;
          if (res === Infinity) {
            e('I can\'t devide by 0!!!');
          }
          r(res);
        }, 5000);
      });
  }
}
