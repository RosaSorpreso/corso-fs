import { Component } from '@angular/core';
import { iUserTask } from '../../models/i-user-task';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userTask:iUserTask[] = []

  constructor(private taskSvc:TodoService, private userSvc:UserService){}

  ngOnInit(){
    let users = this.userSvc.getAllUsers()
    this.userTask = users.map(u => ({
      user: u,
      task: this.taskSvc.getAllTodos().filter(t => t.userId === u.id)}))
  }
}
