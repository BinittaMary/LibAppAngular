import { Component, OnInit } from '@angular/core';
import { AuthorsService} from '../authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author : any;
  
  constructor(public authorObj : AuthorsService, private router: Router) { }

  ngOnInit(): void {
    let AuthorId = localStorage.getItem("getAuthorId");
    this.authorObj.getAuthor(AuthorId)
    .subscribe((authorItem)=>{
      this.author =authorItem;
      console.log(this.author)
      });
  }

}
