import { OrderDetails } from './../models/orderDetails.model';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import {
  addToCart,
  deleteCart,
  productloadedSuccess,
  searchProduct,
  addProductOrder,
} from './action';

export interface AppState {
  products: Product[];
  searchProduct: string;
  carts: Product[];
  orders: OrderDetails[];
}

export const initialState: AppState = {
  products: [],
  searchProduct: '',
  carts: [],
  orders: [],
};

const _appReducer = createReducer(
  initialState,
  on(searchProduct, (state, action) => {
    return {
      ...state,
      searchProduct: action.searchProduct,
    };
  }),
  on(productloadedSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
    };
  }),
  on(addToCart, (state, action) => {
    let cart = { ...action.cart };
    return {
      ...state,
      carts: [...state.carts, cart],
    };
  }),
  on(deleteCart, (state, { id }) => {
    const updatedCart = state.carts.filter((cart) => {
      return cart.id !== id;
    });
    return {
      ...state,
      carts: updatedCart,
    };
  }),
  on(addProductOrder, (state, action) => {
    let order = { ...action.order };
    return {
      ...state,
      orders: [...state.orders, order],
    };
  })
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
