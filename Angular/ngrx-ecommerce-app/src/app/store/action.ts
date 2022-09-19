import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { OrderDetails } from '../models/orderDetails.model';

// Product
export const loadProduct = createAction('[product ] request product');

export const productloadedSuccess = createAction(
  '[product ] product Success',
  props<{ products: Product[] }>()
);

export const searchProduct = createAction(
  '[product Actions] Search Product',
  props<{ searchProduct: string }>()
);

// Cart
export const ADD_TO_CART = '[cart page] add to cart';
export const DELETE_CART_ACTION = '[cart page] delete cart';

export const addToCart = createAction(ADD_TO_CART, props<{ cart: Product }>());

export const deleteCart = createAction(
  DELETE_CART_ACTION,
  props<{ id: number }>()
);

// Order
export const ADD_ORDER = '[order product] add order';

export const addProductOrder = createAction(
  ADD_ORDER,
  props<{ order: OrderDetails }>()
);
