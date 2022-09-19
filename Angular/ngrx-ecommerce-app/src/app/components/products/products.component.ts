import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { loadProduct } from 'src/app/store/action';
import { getProductsData } from 'src/app/store/selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select(getProductsData);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProduct());
  }
}
