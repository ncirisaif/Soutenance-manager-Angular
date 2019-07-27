import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']

})
export class TestComponent implements OnInit {
 showDiv: boolean =true;


  constructor() { }

  ngOnInit() {}



}
