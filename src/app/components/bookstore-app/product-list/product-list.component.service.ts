import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/book';

@Injectable()

export class BookService {
  private url = 'https://localhost:4200/api/bookstore';

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
  }

  constructor(private http: HttpClient) { }

  getBook() {
    return this.http.get<Book[]>(this.url);
  }
}

