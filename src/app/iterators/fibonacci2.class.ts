export class Fibonacci2 implements Iterable<number> {

  private previous = 0;
  private current = 1;
  constructor() {}


 [Symbol.iterator]() {
    let previous = this.previous;
    let current = this.current;

    return {

      next(): IteratorResult<number> {
        [previous, current] = [current, previous + current];
        return { done: false, value: current };
      }
    }
  }
}
