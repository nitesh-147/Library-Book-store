import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { DisplayCartItemComponent } from './display-cart-item/display-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ItemsComponent,
    CartComponent,
    BookComponent,
    DisplayCartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
