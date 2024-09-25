import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { ProductEffects } from './app/store/effects/product.effects';
import { OrderEffects } from './app/store/effects/order.effects';
import { reducer as productReducer } from './app/store/reducers/product.reducer';
import { reducer as orderReducer } from './app/store/reducers/order.reducer';
import { reducer as scheduleReducer } from './app/store/reducers/shedule.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { ScheduleEffects } from './app/store/effects/schedule.effects';

const appConfig: ApplicationConfig = {
  providers: [
      provideStore({
        products: productReducer,
        orders: orderReducer,
        schedules : scheduleReducer
      }),
      provideEffects(ProductEffects, OrderEffects,ScheduleEffects),
      provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
