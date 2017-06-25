import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  display = 'none';
  @Output() passTodo = new EventEmitter();

  constructor() { }
  @Input() todos = []


  ngOnInit() {
    console.log(this.todos);
  }

  OpenNewTodo(){
   this.display = 'block';
    console.log(this.todos);
  }

  closeNewTodo(event):void{
    this.display = 'none';
  }

  addTodo(event):void{
    let itemId = this.todos.length
    console.log('addTood'+ event)
    this.passTodo.emit(event);
  }

}
