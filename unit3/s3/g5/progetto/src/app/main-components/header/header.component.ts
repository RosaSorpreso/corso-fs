import { Component } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';
import { iUser } from '../../models/iuser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  show: boolean = false
  isUserLoggedIn: boolean = false
  user: iUser | undefined;

  constructor(private authSvc:AuthService){}

  ngOnInit(){
    this.authSvc.isLoggedIn$.subscribe(data => {
      this.isUserLoggedIn = data;
    });
    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })
  }

  logout(){
    this.authSvc.logout()
  }
}
