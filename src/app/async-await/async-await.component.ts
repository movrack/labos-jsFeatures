import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() {
    this.welcome();
  }

  ngOnInit() {
  }

  delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
          resolve(count);
      }, milliseconds);
    });
  }

  // async function allways return a Promise
  async welcome(): Promise<void> {
      console.log('Hello');
      for (let i = 0; i < 5; i++) {
      // await is converting Promise<number> into number
          const count: number = await this.delay(500, i);
          console.log(count);
      }
      console.log('World!');
  }






}
