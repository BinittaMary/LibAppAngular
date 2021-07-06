import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book : any;

  constructor(public booksObj : BookService, private router:Router) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("getBookId");
    this.booksObj.getBook(BookId)
    .subscribe((bookItem)=>{
      this.book =bookItem;
      console.log(this.book)
      });
  }
}
