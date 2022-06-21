import { Component, ContentChild, ContentChildren, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @ContentChild('heading3',{static:true}) heading;
  @ContentChildren('heading3') headings;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterContentInit() {
    console.log(this.heading.nativeElement.innerHTML);
    this.heading.nativeElement.innerHTML="ContentChild🍎";
    this.heading.nativeElement.style.background="white";
    this.heading.nativeElement.style.borderRadius="1em";
    // this.headings.first.nativeElement.innerHTML="ContentChildren 🍎";
    // this.headings.last.nativeElement.innerHTML="ContentChildren 🍎";
  }

}
