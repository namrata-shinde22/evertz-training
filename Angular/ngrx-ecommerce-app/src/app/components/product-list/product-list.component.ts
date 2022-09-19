import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { addToCart } from 'src/app/store/action';
import { AppState } from 'src/app/store/reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() product;
  constructor(private store: Store) {}

  ngOnInit(): void {}
  // cart
  addtocart(data) {
    const cart: Product = {
      ...data,
    };
    this.store.dispatch(addToCart({ cart }));
    console.log(cart);
  }
}
