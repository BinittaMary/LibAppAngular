import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { LoginComponent } from './login/login.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AddAuthorComponent} from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { DeleteAuthorComponent } from './delete-author/delete-author.component'
import { SignupComponent} from './signup/signup.component'


const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'books' , component: BooksComponent},
  {path : 'authors' , component: AuthorsComponent},
  {path : 'book' , component: BookComponent},
  {path : 'author' , component: AuthorComponent},
  {path : 'addbook' ,  canActivate: [AuthGuard], component: AddBookComponent},
  {path : 'addauthor' ,  canActivate: [AuthGuard], component: AddAuthorComponent},
  {path : 'editbook', canActivate: [AuthGuard],  component: UpdateBookComponent},
  {path : 'editauthor', canActivate: [AuthGuard],  component: EditAuthorComponent},
  {path : 'deletebook' , canActivate: [AuthGuard], component: DeleteBookComponent},
  {path : 'deleteauthor' , canActivate: [AuthGuard], component: DeleteAuthorComponent},
  {path : 'login',  component : LoginComponent},
  {path : 'signup',  component : SignupComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
