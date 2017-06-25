import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {
  @Input() bee;
  @Output() passInfo = new EventEmitter();
  @Output() passAlbum = new EventEmitter();
  infoBee = [];
   title = "";

  constructor() { 
  }

  ngOnInit() {
  }
  
  getInfo(id) {
    this.infoBee=[this.bee.id, this.bee.posts, this.bee.album, this.bee.todos];
    console.log(this.bee);
    this.passInfo.emit(this.infoBee);
  }
  
  
}
