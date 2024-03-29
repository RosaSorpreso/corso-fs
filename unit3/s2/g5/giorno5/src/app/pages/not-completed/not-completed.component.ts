import { Component } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-not-completed',
  templateUrl: './not-completed.component.html',
  styleUrl: './not-completed.component.scss'
})
export class NotCompletedComponent {

  tasks: iTodo[] = []

  constructor(private taskSvc: TodoService){}

  ngOnInit(){
    this.tasks = this.taskSvc.getCheckedTodos(false)
  }
}
