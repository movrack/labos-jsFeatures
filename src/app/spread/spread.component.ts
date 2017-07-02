import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const defaultOptions = {
        method: 'GET',
        credentials: 'same-origin'
    };

    const requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };

    console.log(defaultOptions);
    console.log(requestOptions);

    const options = { ...defaultOptions, ...requestOptions };
    console.log(options);
  }

}
