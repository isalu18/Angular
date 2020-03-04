import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    // this.getBooks();
    // this.getBook();
    // this.deleteBook();
    //this.updateBook();
    //this.addBook();
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().then((books) => {
      this.books = books;
    });
  }

  // getBook() {
  //   this.bookService.getBook('1234').then((book) => {
  //     console.log(book);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // deleteBook() {
  //   this.bookService.deleteBook('1234').then((res) => {
  //     console.log(res);

  //     this.getBooks();

  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // updateBook() {
  //   const newBook =  {
  //     id: '1234',
  //     titulo: 'Editado',
  //     autor: 'Joe Smith',
  //     descripcion: 'Esta es una descripcion',
  //     coverUrl: 'http://bookcoverarchive.com/wp-content/uploads/2016/12/Book-of-Strange-New-Things.jpg'
  //   };

  //   this.bookService.updateBook('1234', newBook).then((res) => {
  //     console.log(res);
  //     this.getBooks();
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // addBook() {
  //   const newBook =  {
  //     id: '123456',
  //     titulo: 'Nuevo',
  //     autor: 'Joe Smith',
  //     descripcion: 'Esta es una descripcion',
  //     coverUrl: 'http://bookcoverarchive.com/wp-content/uploads/2016/12/Book-of-Strange-New-Things.jpg'
  //   };

  //   this.bookService.addBook(newBook).then((res) => {
  //     console.log(res);
  //     this.getBooks();
  //   });
  // }
}
