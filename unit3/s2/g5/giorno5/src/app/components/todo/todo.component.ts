import { Component, Input } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { iUser } from '../../models/i-user';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() task!: iTodo
  user?:iUser

  constructor(private taskSvc:TodoService){}

  ngOnInit(){
    this.user = this.taskSvc.getUserById(this.task.id)
  }
}
