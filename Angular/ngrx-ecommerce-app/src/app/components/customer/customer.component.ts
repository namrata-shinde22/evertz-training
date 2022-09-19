import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { OrderDetails } from 'src/app/models/orderDetails.model';
import { getOrderDetails } from 'src/app/store/selector';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  orderDetails$!: Observable<OrderDetails[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.orderDetails$ = this.store.select(getOrderDetails);
  }
}
