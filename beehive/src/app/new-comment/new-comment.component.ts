import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @Output() closeNewComment = new EventEmitter();
  @Output() passComment  = new EventEmitter();
  title = '';
  body = '';

  constructor() { }

  ngOnInit() {
  }
  
   modalClose(){
    this.closeNewComment.emit(event);
    console.log('close')
  }

   addComment(){
     console.log(this.title, this.body)
     this.passComment.emit({'title' : this.title, 'body' : this.body });
   }
}
