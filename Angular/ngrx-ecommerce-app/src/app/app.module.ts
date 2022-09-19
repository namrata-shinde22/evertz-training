import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PosComponent } from './components/pos/pos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/pos/search/search.component';
import { BreadcrumbsComponent } from './components/pos/breadcrumbs/breadcrumbs.component';
import { CartTotalComponent } from './components/cart/cart-total/cart-total.component';
import { FilterPipe } from './services/filter.pipe';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/reducer';
import { ShopEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    OrderComponent,
    ProductsComponent,
    CustomerComponent,
    PosComponent,
    HomeComponent,
    CartItemComponent,
    ProductListComponent,
    SearchComponent,
    BreadcrumbsComponent,
    CartTotalComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ shop: appReducer }),
    EffectsModule.forRoot([ShopEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
