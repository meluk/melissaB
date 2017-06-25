import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() passNewPost = new EventEmitter();
  @Input()  nPost = [];
  color = 'blue';
  title = '';
  body = '';


  constructor() {
    
   }
  

  ngOnInit() {
  }

  addPost(){
   //console.log({'title' : this.title, 'body' : this.body });
   this.passNewPost.emit({'title' : this.title, 'body' : this.body });
   this.modalClose();
  }

  modalClose() {
    console.log('close');
    this.closeModal.emit(event);
  }

}
