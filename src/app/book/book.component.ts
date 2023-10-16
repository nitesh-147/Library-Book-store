import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() item: any;
  @Output() cartBook: EventEmitter<any> = new EventEmitter();
  addToCart(book:any) {
    this.cartBook.emit(book);
  };
}
