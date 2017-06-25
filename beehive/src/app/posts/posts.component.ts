import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() post = [];
  @Input() display  = 'none';
  @Output() newPost = new EventEmitter();
  @Output() passComment = new EventEmitter();
  //@Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  modalOpen(){
    this.display  = 'block';
  }

   modalClose1(){
    this.display  = 'none';
  }

  addPost(event):void{
    console.log(event);
    this.newPost.emit(event);
  }

  addComment(event):void{
    console.log('comPosts'+ event)
    this.passComment.emit(event);
  }

}
