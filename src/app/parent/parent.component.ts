import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild("heading3",{static:true}) headingContent;
  @ViewChildren('h1') headingContents;
  apples:any=[];
  constructor() { }

  ngOnInit(): void {
    this.apples=["🍎","🍎","🍎"];
    console.log("before ViewInit",this.headingContent.nativeElement.innerHTML);
  }

  ngAfterViewInit(){
    console.log("AfterViewInit",this.headingContent.nativeElement.innerHTML);
    console.log("AfterViewInit",this.headingContents.first.nativeElement.innerHTML='Parent Component 🍎'); 
  }
}
