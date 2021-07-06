import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  images : any;

  constructor(public booksObj : BookService, private router:Router, private fb:FormBuilder, private http : HttpClient) { }

  BookItem = {
    title       : '',
    author      : '',
    genre       : '',
    description : '',
    image       : '',
    newbook     : 'Y'
  }

  submitted =false;
  navFlag   = false;


  
  ngOnInit(): void {
  }
  
  AddBook(){
    this.BookItem.image = this.BookItem.image.replace('C:\\fakepath\\','');
    this.booksObj.newBook(this.images, this.BookItem);
    console.log(` upload image ${this.images}`); 
    // this.booksObj.newBook(this.BookItem);
    console.log('data updated');
    localStorage.setItem('bookAlertMsg', `The book ${this.BookItem.title} is added`); 
    this.router.navigate(['/books']);   
  }

  selectImage(event : any) {
    console.log('select image')
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log('inside if event')
    }    
  }


 

  onSubmitClick()
  {
    this.submitted = true; 
    
  }
}

