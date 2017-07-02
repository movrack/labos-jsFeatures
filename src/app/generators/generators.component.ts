import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generators',
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.css']
})
export class GeneratorsComponent {

  private counterGenerator = this.infiniteSequence();
  private counterValue = 0;
  constructor() { }

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
