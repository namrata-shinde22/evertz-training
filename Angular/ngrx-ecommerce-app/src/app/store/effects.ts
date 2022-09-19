import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { productloadedSuccess, loadProduct } from './action';
import { map, switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class ShopEffects {
  allProductData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProduct),
      switchMap(() =>
        this.apiService
          .getAllData()
          .pipe(map((products) => productloadedSuccess({ products })))
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
