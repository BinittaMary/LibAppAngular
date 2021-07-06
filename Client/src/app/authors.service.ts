import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(public http : HttpClient) { }

  getAuthors(){
    return this.http.get('http://localhost:5000/authors')
  };

  getAuthor(id:any){
    return this.http.get("http://localhost:5000/author/"+id);
  };

  newAuthor(image:any, Author : any)
  {   
    console.log(`newAuthor : ${Author.title}`);
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('authorname', Author.authorname); 
    formData.append('nationality', Author.nationality); 
    formData.append('works', Author.works); 
    formData.append('career', Author.career); 
    formData.append('image', Author.image); 
   return this.http.post("http://localhost:5000/author/insert",formData)
     .subscribe(data =>{console.log(data)})
  };

  editAuthor(Author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:5000/author/update",Author)
    .subscribe(data =>{console.log(`response recieved ${data}`)})
  };

  editAuthorWithImage(image:any, Author:any)
  {
    console.log('editAuthorwithImage')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('_id', Author._id); 
    formData.append('authorname', Author.authorname); 
    formData.append('nationality', Author.nationality); 
    formData.append('works', Author.works); 
    formData.append('career', Author.career); 
    formData.append('image', Author.image); 
    return this.http.put("http://localhost:5000/author/updateWithFile",formData)
    .subscribe(data =>{console.log(`response recieved ${data}`)})
  };

  deleteAuthor(Author:any)
  {
    console.log(`inside server ${Author}`);
    return this.http.post("http://localhost:5000/author/remove",Author)
    .subscribe(data =>{console.log(data)})
  }
  
  // uploadImage(image:any)
  // {
  //   console.log('inside service upload')
  //   const formData = new FormData();
  //   formData.append('file', image);  
  //    this.http.post('http://localhost:5000/file', formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  // }
}
