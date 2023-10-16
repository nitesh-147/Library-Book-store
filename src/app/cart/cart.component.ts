import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartBooks: Array<any> = [];
  total:number=0;
  updateTotal(){
    this.total=0;
    this.cartBooks.forEach(element => {
      this.total+=element.price.value*element.quantity;
    });
  }
}
