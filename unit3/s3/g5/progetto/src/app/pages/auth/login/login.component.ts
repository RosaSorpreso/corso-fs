import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iLogin } from '../../../models/ilogin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login:iLogin = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

    signIn(){
      this.authSvc.login(this.login)
      .subscribe(data => {
        this.router.navigate(['/homepage'])
      })
    }
}
