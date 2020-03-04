import { Injectable } from '@angular/core';
import { Book } from 'src/models/book.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {
      id: '1234',
      titulo: 'Primer Libro',
      descripcion: 'This is a book description',
      autor: 'Joe Smith',
      coverUrl: 'http://bookcoverarchive.com/wp-content/uploads/2016/12/Book-of-Strange-New-Things.jpg'
    },
    {
      id: '1245',
      titulo: 'Primer Libro',
      descripcion: 'This is a book description',
      autor: 'Joe Smith',
      coverUrl: 'http://bookcoverarchive.com/wp-content/uploads/2016/12/Book-of-Strange-New-Things.jpg'
    },
    {
      id: '1345',
      titulo: 'Primer Libro',
      descripcion: 'This is a book description',
      autor: 'Joe Smith',
      coverUrl: 'http://bookcoverarchive.com/wp-content/uploads/2016/12/Book-of-Strange-New-Things.jpg'
    }
  ];
  constructor() { }

  getBooks(): Promise<Book[]> {
    return new Promise ((resolve, reject) => {
      resolve(this.books as Book[]);
    });
  }

  getBook(bookid: string): Promise<Book> {

    return new Promise((resolve, reject) => {
      const foundBook = this.books.find((book) => {
        return book.id === bookid;
      });

      if(foundBook) {
        resolve(foundBook);
      } else {
        reject(null);
      }
    });

  }

  deleteBook(bookid: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const remainingBooks = this.books.filter((book) => {
        return book.id !== bookid;
      });

      if (JSON.stringify(remainingBooks) !== JSON.stringify(this.books)) { // convierte la cadena en string
        this.books = remainingBooks;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  updateBook(bookid: string, updatebook: Book): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const updatedBooks = this.books.map((book) => {
        if (book.id === bookid) {
          const newBook = {
            ...book,
            ...updatebook
          };
          return newBook;
        }
        return book;
      });

      if (JSON.stringify(updatedBooks) !== JSON.stringify(this.books)) {
        this.books = updatedBooks;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  addBook(book: Book): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.books.push(book);

      resolve(true);
    });
  }
}
