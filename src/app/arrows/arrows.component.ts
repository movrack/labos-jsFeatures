import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

  private property: string;
  constructor() {
    this.property = 'property';
   }

  ngOnInit() {



    // ---------------------------------------------------------
    function add1(a, b) {
      return a + b;
    }
    console.log('- function add1(2,3)');
    console.log(add1(2, 3) );

    // ---------------------------------------------------------
    const add2 = function (a, b) {
      return a + b;
    }
    console.log('- anonymous function add2(2,3)');
    console.log(add2(2, 3) );


    // ---------------------------------------------------------
    const add3 = (a, b) => {
      return a + b;
    }
    console.log('- arrow add3(2,3)');
    console.log(add3(2, 3) );


    // ---------------------------------------------------------
    const add4 = (a, b) => a + b ;
    console.log('- arrow lambda add4(2,3)');
    console.log(add4(2, 3) );


    // Scoping
    const me = this;

    // ---------------------------------------------------------
    function read1() {
      return me.property;
    }
    console.log('- function read1()');
    console.log(read1());

    // ---------------------------------------------------------
    const read2 = function () {
      return me.property;
    }
    console.log('- anonymous function read2()');
    console.log(read2() );


    // ---------------------------------------------------------
    const read3 = () => {
      return this.property;
    }
    console.log('- arrow read3()');
    console.log(read3() );


    // ---------------------------------------------------------
    const read4 = () => this.property ;
    console.log('- arrow lambda read4()');
    console.log(read4() );

    // ---------------------------------------------------------
    setTimeout(function() {
      console.log('function ' + this.property);
    }, 5000);

    setTimeout(() => console.log('arrow ' + this.property), 5000);
  }

}
