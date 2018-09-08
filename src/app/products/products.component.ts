import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getSum() {
    let sum = 0;
    for (const product of this.cartService.products) {
      sum = sum + product.price * product.amount;
    }
    return sum;
  }
  countTax() {
    return this.getSum() - this.getSum() * 0.05;
  }

  countSum() {
    return this.getSum() + this.countTax();
  }
}
