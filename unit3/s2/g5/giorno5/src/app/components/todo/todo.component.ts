import { Component, Input } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { iUser } from '../../models/i-user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() task!: iTodo
  user?:iUser

  constructor(private taskSvc:TodoService, private userSvc:UserService){}

  ngOnInit(){
    this.user = this.userSvc.getUserById(this.task.id)
  }

  onCheck(){
    this.taskSvc.checkTodo(this.task.id)
  }
}
