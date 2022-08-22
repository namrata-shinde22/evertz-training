import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { FilterPipe } from './shared/filter.pipe';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    FilterPipe,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
