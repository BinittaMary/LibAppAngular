import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 

  constructor(public http : HttpClient) { }

  getBooks(){
    return this.http.get('http://localhost:5000/books')
  };

  getBook(id:any){
    return this.http.get("http://localhost:5000/"+id);
  };



  // newBook(item:any)
  // {   
  //   console.log(`newBook : ${item.title}`);
  //  return this.http.post("http://localhost:5000/insert",{"BookItem":item})
  //    .subscribe(data =>{console.log(data)})
  // };

    editBook(Book:any)
  {   
    console.log(`editBook : ${Book.title}`);
   return this.http.put("http://localhost:5000/update",Book)
     .subscribe(data =>{console.log(data)})
  };


  editBookWithImage(image:any, Book:any)
  {
    console.log('client update')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('_id', Book._id); 
    formData.append('title', Book.title); 
    formData.append('author', Book.author); 
    formData.append('genre', Book.genre); 
    formData.append('description', Book.description); 
    formData.append('image', Book.image); 
    formData.append('newbook', Book.newbook); 
    return this.http.put("http://localhost:5000/updateWithFile",formData)
    .subscribe(data =>{console.log(`response recieved ${data}`)})
  };

  deleteBook(Book:any)
  {
    console.log(`inside server ${Book}`);
    return this.http.post("http://localhost:5000/remove",Book)
    .subscribe(data =>{console.log(data)})
  }
  
  newBook(image:any, Book : any)
  {
    console.log('inside service upload')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('title', Book.title); 
    formData.append('author', Book.author); 
    formData.append('genre', Book.genre); 
    formData.append('description', Book.description); 
    formData.append('image', Book.image); 
    formData.append('newbook', Book.newbook); 
    return this.http.post('http://localhost:5000/insert', formData)
     .subscribe(data =>{console.log(data)});
  }
}
