import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookInterface } from './../models/book';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
  '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//import { BADHINTS } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
   // this.booksCollection = afs.collection<BookInterface>('books');
   // this.books = this.booksCollection.valueChanges();
  }

  private booksCollection: AngularFirestoreCollection<BookInterface>;
  private books: Observable<BookInterface[]>; //array
  private bookDoc: AngularFirestoreDocument <BookInterface>;
  private book: Observable <BookInterface>;
  public selectedBook: BookInterface ={
    id: null 
  };


  getAllBooks() {
    this.booksCollection = this.afs.collection<BookInterface>('books');
    this.booksCollection = this.afs.collection<BookInterface>('books');
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllBooksOffers() {
    this.booksCollection = this.afs.collection('books', ref => ref.where('oferta', '==', '1'));
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  //Me permite mostrar solo los librosd que se encuentran en oferta (hace un filtrado)

  getOneBook(idBook: string) {
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as BookInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addBook(book: BookInterface):void {
    this.booksCollection.add(book);
  }

  updateBook(book: BookInterface):void {
    let idBook = book.id;
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    this.bookDoc.update(book);  
  }

  deleteBook(idBook: string):void {
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    this.bookDoc.delete();
  }
}
