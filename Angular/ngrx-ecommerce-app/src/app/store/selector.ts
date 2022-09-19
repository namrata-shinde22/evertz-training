import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

const getProductsState = createFeatureSelector<AppState>('shop');

export const getProductsData = createSelector(getProductsState, (state) => {
  return state.products;
});

export const SearchProduct = createSelector(getProductsState, (state) => {
  return state.searchProduct;
});

export const getCartData = createSelector(getProductsState, (state) => {
  return state.carts;
});

export const getOrderDetails = createSelector(getProductsState, (state) => {
  return state.orders;
});
