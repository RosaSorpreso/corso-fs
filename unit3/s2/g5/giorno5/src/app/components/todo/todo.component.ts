import { Component, Input } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { iUser } from '../../models/i-user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() task!: iTodo
  user?:iUser

  constructor(private userSvc:UserService){}

  ngOnInit(){
    this.user = this.userSvc.getUserById(this.task.id)
  }
}
