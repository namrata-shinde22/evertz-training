import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() products;
  @Output() onDelete = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.products);
  }

  onDeletebtn() {
    this.onDelete.emit(this.products.id);
  }
}
