import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCartData } from 'src/app/store/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems: number = 0;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getCartData).subscribe((data) => {
      this.cartItems = data.length;
    });
  }
}
