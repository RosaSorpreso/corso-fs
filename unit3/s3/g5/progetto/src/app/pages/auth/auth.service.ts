import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iUser } from '../../models/iuser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { UserService } from '../../user.service';
import { iLogin } from '../../models/ilogin';

type AccessData = {
  token:string,
  user:iUser
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubj = new BehaviorSubject<iUser | null>(null)

  user$ = this.authSubj.asObservable()
  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user =>  this.syncIsLoggedIn = user)
    )

  syncIsLoggedIn:boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    private userSvc: UserService
    ) {
      this.restoreUser()
    }

  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl

  register(newUser:Partial<iUser>):Observable<AccessData> {
    return this.http.post<AccessData>(this.registerUrl,newUser)
    .pipe(tap(() => {
      this.userSvc.getAllUsers().subscribe(users => this.userSvc.userSubj.next(users))
    }))
  }

  login(loginData:iLogin):Observable<AccessData> {
    return this.http.post<AccessData>(this.loginUrl,loginData)
    .pipe(tap(data => {
      this.authSubj.next(data.user)
      localStorage.setItem('accessData', JSON.stringify(data))
      //this.autoLogout(data.token)
    }))
  }

  logout(){
    this.authSubj.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['/auth/login'])
  }

  getAccessToken():string{
    const userJson = localStorage.getItem('accessData')
    if(!userJson) return '';
    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.token)) return '';
    return accessData.token
  }

  // autoLogout(jwt:string){
  //   const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
  //   const expMs = expDate.getTime() - new Date().getTime();
  //   setTimeout(()=>{
  //     this.logout()
  //   },expMs)
  // }

  restoreUser(){
    const userJson = localStorage.getItem('accessData')
    if(!userJson) return;
    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.token)) return;
    this.authSubj.next(accessData.user)
    //this.autoLogout(accessData.token)
  }
}
