import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap, map, tap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { loadProduct } from 'src/app/store/action';
import { getProductsData, SearchProduct } from 'src/app/store/selector';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
})
export class PosComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select(getProductsData);
  searchKey: string = '';
  public productlist: any;
  public filterCategory: Observable<Product[]> = this.store
    .select(SearchProduct)
    .pipe(
      tap((search) => {
        console.log(search);
      }),
      switchMap((search) =>
        this.products$.pipe(
          map((products) =>
            products.filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase())
            )
          )
        )
      )
    );

  constructor(private store: Store) {
    this.store.dispatch(loadProduct());

    this.store.select(SearchProduct).subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  ngOnInit(): void {}
}
