import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { deleteCart } from 'src/app/store/action';
import { AppState } from 'src/app/store/reducer';
import { getCartData } from 'src/app/store/selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products$!: Observable<Product[]>;
  public grandTotal: number = 0;
  showDetails: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getCartData);
    this.showDetails = false;
  }
  onDelete(id: number) {
    this.store.dispatch(deleteCart({ id }));
  }

  showHideForm() {
    this.showDetails = true;
  }
}
