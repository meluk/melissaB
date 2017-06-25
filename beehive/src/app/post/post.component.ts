import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Output() closeNComment = new EventEmitter();
  @Output() passComment = new EventEmitter();
  @Input() posts;
  @Input() display  = 'none';

  ngOnInit() {
  }

  addComent(){
    console.log('click')
    this.display  = 'block';
  }

  addComment(event):void{
    console.log('comPost'+ event)
    this.passComment.emit(event);
  }
  
  closeNewComment(){
    console.log('close IN post')
    this.display  = 'none';
  }
  
}
