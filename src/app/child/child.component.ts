import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@ViewChild('pstring',{static:false})  parentString; 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterVewInit(){
    console.log(this.parentString);
  }

}
