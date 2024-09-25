import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import { catchError, map, switchMap, of } from 'rxjs';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from '../actions/product.action';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map(products => 
            loadProductsSuccess({ products })
            ),
          catchError(error => of(loadProductsFailure({ error })))
        )
      )
    )
  );
}
