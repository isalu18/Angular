import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from 'src/models/book.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.sass']
})
export class BookUpdateComponent implements OnInit {

  book: Book;
  bookForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    const bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.getBook(bookId);
    this.initForm();
  }

  initForm() {
    this.bookForm = new FormGroup({
      titulo: new FormControl(null, [Validators.required]),
      autor: new FormControl(null, [Validators.required]),
      descripcion: new FormControl(null, [Validators.required]),
      coverUrl: new FormControl(null, [Validators.required])
    });
  }

  patchForm() {
    this.bookForm.patchValue({
      ...this.book
    });
  }

  getBook(bookId: string) {
    this.bookService.getBook(bookId).then((book: Book) => {
      this.book = book;
      console.log(book);
      this.patchForm();
    }).catch((error) => {
      this.router.navigate(['books', 'manage']);
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const updatedBook: Book = {
        id: this.book.id,
        ...this.bookForm.value
      };

      this.bookService.updateBook(this.book.id, updatedBook).then((res) => {
        this.router.navigate(['books/manage']);
      }).catch((error) => {
        alert('Ocurrio un error al actualizar el libro.');
      });
    } else {
      alert('Tu forma no esta completa');
    }
  }

}
