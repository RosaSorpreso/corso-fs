import { Component, Input } from '@angular/core';
import { iTodo } from '../../models/i-todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() task!: iTodo
}
