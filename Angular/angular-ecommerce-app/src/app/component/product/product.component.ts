import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public productlist: any;
  public filterCategory: any;

  searchKey: string = '';
  constructor(
    private productService: ProductApiService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => {
      this.productlist = res;
      this.filterCategory = res;

      this.productlist.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });

    this.shoppingCartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtocart(item: any) {
    this.shoppingCartService.addtoCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productlist.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
