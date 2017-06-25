import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Post } from '../models/post';

@Component({
  selector: 'app-base-activity',
  templateUrl: './base-activity.component.html',
  styleUrls: ['./base-activity.component.css']
})
export class BaseActivityComponent implements OnInit {

  //private post: Post[] = [];
  constructor() { }
  
  @Input() infoBee = [];
  @Output() newPost = new EventEmitter();
  @Output() passTodo = new EventEmitter();
  @Output() passComment = new EventEmitter();
  postT = this.infoBee[1];



  ngOnInit() {
    
     console.log(this.postT);
  }

  addPost(event):void{
    console.log(event);
    this.newPost.emit(event);
  }

 
  addTodo(event):void{
    console.log('base'+ event)
    this.passTodo.emit(event);
  }

  addComment(event):void{
    console.log('comPost'+ event)
    this.passComment.emit(event);
  }

}
