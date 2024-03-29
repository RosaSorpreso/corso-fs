import { Component } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {

  tasks:iTodo[] = []

  constructor(private taskSvc: TodoService){}

  ngOnInit(){
    this.tasks = this.taskSvc.getCheckedTodos(true)
  }
}
