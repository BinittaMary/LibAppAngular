import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  BookItem = {
    title       : '',
    author      : '',
    genre       : '',
    description : '',
    image       : '',
    newbook     : 'Y'
  };

  constructor(public booksObj : BookService, private router:Router) { }

  ngOnInit(): void {
    
    let BookId = localStorage.getItem("deleteBookId");
    console.log(`inside delete init deleteBookId ${BookId}`);
    this.booksObj.getBook(BookId)
    .subscribe((book)=>{
      this.BookItem =JSON.parse(JSON.stringify(book));;
      console.log(this.BookItem)
      });
  }

  DeleteBook(){
    let BookId = localStorage.getItem("deleteBookId");
    console.log(`inside delete function deleteBookId ${BookId}`);
    this.booksObj.deleteBook(this.BookItem);
    localStorage.setItem('bookAlertMsg', `The book ${this.BookItem.title} is deleted`); 
    this.router.navigate(['/books']);   
  }

}
