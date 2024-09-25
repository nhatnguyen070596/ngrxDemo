import { createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/product.reducer';

export const selectProductsState = (state: any) => state.products;

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductState) => state.products
);
