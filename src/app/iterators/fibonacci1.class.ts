export class Fibonacci1 implements  Iterator<number> {

  private previous = 0;
  private current = 1;
  constructor() {}

  public next(): IteratorResult<number> {
        [this.previous, this.current] = [this.current, this.previous + this.current];
        return { done: false, value: this.current };
  }

}
