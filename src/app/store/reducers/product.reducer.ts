import { Action, createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from '../actions/product.action';
import { Product } from '../../model/product.model';

export interface ProductState {
  products: Product[];
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
};

const productReducer = createReducer(
  initialProductState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products }))
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
