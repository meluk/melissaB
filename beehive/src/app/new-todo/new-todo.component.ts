import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  @Output() sendClose  = new EventEmitter();
  @Output() passTodo  = new EventEmitter();
  title = '';

  constructor() { }

  ngOnInit() {
  }

  closeNewTodo(){
    this.sendClose.emit(this.title);
    console.log('todo close');
  }

  addTodo(){
    console.log(this.title);
    this.passTodo.emit(this.title);
  }

}
