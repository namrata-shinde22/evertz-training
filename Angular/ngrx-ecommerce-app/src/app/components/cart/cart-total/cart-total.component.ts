import { addProductOrder } from './../../../store/action';
import { OrderDetails } from './../../../models/orderDetails.model';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { getCartData } from 'src/app/store/selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent implements OnInit {
  @Input() grandTotal;
  @Input() products;
  total: number = 0;
  showBtn: boolean = false;
  orderData: any;
  products$!: Observable<Product[]>;

  formData!: FormGroup;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getCartData);
    this.formData = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      mobileNo: new FormControl(null, [Validators.required]),
    });
    this.store.select(getCartData).subscribe((data) => {
      this.orderData = JSON.parse(JSON.stringify(data));
    });
  }

  addOrderDetails() {
    const order: OrderDetails = {
      name: this.formData.value.name,
      mobileNo: this.formData.value.mobileNo,
      details: this.orderData,
    };
    this.store.dispatch(addProductOrder({ order }));
    this.formData.reset();
    this.router.navigate(['/order']);
  }
}
