import { Component } from '@angular/core';
import { iUser } from '../../models/iuser';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user: iUser | undefined;

  constructor(private authSvc: AuthService) {}

  ngOnInit(){
    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })
  }
}
