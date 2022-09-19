import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() items;
  @Output() addtoCart = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  addtocart() {
    this.addtoCart.emit(this.items);
  }
}
