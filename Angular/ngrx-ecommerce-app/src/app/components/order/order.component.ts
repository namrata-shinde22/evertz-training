import { getOrderDetails } from './../../store/selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderDetails } from 'src/app/models/orderDetails.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderDetails$!: Observable<OrderDetails[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.orderDetails$ = this.store.select(getOrderDetails);
  }
}
