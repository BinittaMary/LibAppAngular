import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { string } from 'node_modules - Copy/postcss-selector-parser/postcss-selector-parser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 s : any;
  constructor(private http : HttpClient) { }

  loginUser(user:any)
  {
    return this.http.post<any>('http://localhost:5000/login', user)
  }

  SignUpUser(user:any)
  {
    return this.http.post<any>('http://localhost:5000/adduser', user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  getCurrentUser()
  {
    return localStorage.getItem('currentUser')
  }
  
  getbookAlertMsg()
  {
    return localStorage.getItem('bookAlertMsg')
  }
}
