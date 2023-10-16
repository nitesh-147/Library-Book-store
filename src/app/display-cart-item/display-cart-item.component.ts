import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-cart-item',
  templateUrl: './display-cart-item.component.html',
  styleUrls: ['./display-cart-item.component.css']
})
export class DisplayCartItemComponent {
    @Input() book:any={};
    @Input() total:number=0;
    @Input() updateTotal:any;
    updateVal(inc:number,book:any){
       if(inc===1){
        book.quantity+=1;
       }
       else{
        if(book.quantity>1){
          book.quantity-=1;
        }
       }
       this.updateTotal();
    };
}
