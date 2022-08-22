import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.shoppingCartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.shoppingCartService.removeCartItem(item);
  }

  emptycart() {
    this.shoppingCartService.removeAllCart();
  }
}
