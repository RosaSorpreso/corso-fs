import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { iUser } from '../../models/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: iUser[]=[];

  constructor(private usersSvc: UserService) { }

  ngOnInit(): void {
    this.usersSvc.$users.subscribe(users => {
      this.users = users;
    });
  }
}
