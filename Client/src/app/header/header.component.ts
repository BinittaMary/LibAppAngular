import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser : any ='';
  constructor(public _auth :AuthService, private _router :Router ) { }

  ngOnInit(): void {
    this.loggedUser = this._auth.getCurrentUser();
  }
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/'])
}
}
