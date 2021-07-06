import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  BookItem = {
    title       : '',
    author      : '',
    genre       : '',
    description : '',
    image       : '',
    newbook     : 'Y'
  };

  alertData = {
    alert : false,
    alertMsg : ''
  };

  images  : any;
  imgPrev  : any ='';
  submitted : boolean = false;
  imageModified : boolean=false;
  

  constructor(public booksObj : BookService, private router:Router) { }


  ngOnInit(): void {
    this.submitted = false;
    this.imageModified= false;
    let BookId = localStorage.getItem("editBookId");
    this.booksObj.getBook(BookId)
    .subscribe((book)=>{
      this.BookItem =JSON.parse(JSON.stringify(book));;
      this.imgPrev  =this.BookItem.image;
      console.log(this.BookItem)
      });
    }


    EditBook(){
      this.BookItem.image = this.BookItem.image.replace('C:\\fakepath\\','');
      if (this.imageModified) {
         this.booksObj.editBookWithImage(this.images, this.BookItem);}
      else {
        this.booksObj.editBook( this.BookItem);  
      }
       localStorage.setItem('bookAlertMsg', `The book ${this.BookItem.title} is updated`); 
       this.router.navigate(['/books']);   
    }

    selectImage(event : any) {
      this.imageModified= true;
      console.log('select image')
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.images = file;
        console.log('inside if event')
      }    
    }
  
}
