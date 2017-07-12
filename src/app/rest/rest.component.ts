import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function f( arg1, ...allArgs) {
      console.log('arg1 : ' + arg1);
      console.log('rest : ');
      console.log(allArgs);
      console.log('rest length : ' + allArgs.length);
    }

    f( 'arg1', 'arg2', 3, 4, 'arg5', { data: 'obj5'} );

  }
}
