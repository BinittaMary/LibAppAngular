import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteBookComponent } from './delete-book/delete-book.component';

import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { LoginComponent } from './login/login.component';
import { BookService } from './book.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { AuthorComponent } from './author/author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { DeleteAuthorComponent } from './delete-author/delete-author.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    UpdateBookComponent,
    AddBookComponent,
    DeleteBookComponent,
    UploadFileComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    DeleteAuthorComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [AuthService,AuthGuard,BookService,AuthorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
