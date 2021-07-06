import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthorsService} from '../authors.service';
 
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  
AuthorData : any;
alertMsg   : any;

  constructor(public _auth : AuthService, public router : Router, public authorObj : AuthorsService) { }

  ngOnInit(): void {
    this.authorObj.getAuthors()
    .subscribe((authors)=>{
      this.AuthorData =authors;
      console.log(this.AuthorData);
      });
      this.alertMsg = localStorage.getItem('authorAlertMsg');
      console.log (`Alert msg : ${this.alertMsg}` );
      localStorage.removeItem('authorAlertMsg');
  }

  getAuthor(author: any)
  {
    localStorage.setItem("getAuthorId", author._id.toString());
    this.router.navigate(['author']);
  };

  editAuthor(author: any)
  {
    console.log('inside edit author');
    localStorage.setItem("editAuthorId", author._id.toString());
    console.log(`set item ${author._id.toString()}` );
    this.router.navigate(['editauthor']);
  };

  deleteAuthor(author: any)
  {
    localStorage.setItem("deleteAuthorId", author._id.toString());
    this.router.navigate(['deleteauthor']);
  };

}
