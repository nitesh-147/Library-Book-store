import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent {
    @Input() books:Array<any>=[];
    @Output() cartBook:EventEmitter<any>=new EventEmitter();
    updateCart(book:any){
      this.sendCartBook(book);
    }
    sendCartBook(book:any){
      this.cartBook.emit(book);
    }
}
