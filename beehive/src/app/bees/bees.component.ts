import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {
   @Input() bees= [];
   
   @Output() passInfo = new EventEmitter();
   //@Input() userPosts= [];
   

  constructor() { }

  ngOnInit() {
  }

  getInfo(event):void{
   console.log(this.bees);
   this.passInfo.emit(event);
  }
 
}
