import { iTodo } from './../../models/i-todo';
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  tasks:iTodo[] = []

  constructor(private taskSvc: TodoService){}

  ngOnInit(){
    this.tasks = this.taskSvc.getAllTodos()
  }
}
