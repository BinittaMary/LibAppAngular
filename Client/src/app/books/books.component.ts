import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 
  booksdata : any;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage  : boolean = true;
  book : any;
  alertMsg : any ='';

  constructor(public booksObj : BookService, private router:Router, public dialog: MatDialog, public _auth : AuthService) { }

  ngOnInit(): void {
    this.alertMsg = localStorage.getItem('bookAlertMsg');
    this.booksObj.getBooks()
    .subscribe((books)=>{
      this.booksdata =books;
      console.log(this.booksdata);
      localStorage.removeItem('bookAlertMsg'); 
      });
       console.log (`Alert msg : ${this.alertMsg}` );
    }



  getBook(book: any)
  {
    localStorage.setItem("getBookId", book._id.toString());
    this.router.navigate(['book']);
    localStorage.removeItem('bookAlertMsg'); 
  };

  editBook(book: any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['editbook']);
    localStorage.removeItem('bookAlertMsg'); 
  };

  deleteBook(book: any)
  {
    localStorage.setItem("deleteBookId", book._id.toString());
    this.router.navigate(['deletebook']);
    localStorage.removeItem('bookAlertMsg'); 
  };

}

