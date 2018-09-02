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

  getProducts() {
    return this.cartService.getProducts();
  }
  clearProducts() {
    this.cartService.clearProducts();
  }
  undo() {
    this.cartService.undo();
  }
  remove(id) {
    this.cartService.remove(id);
  }
  getSum() {
    var sum: number = 0;
    for (var product of this.cartService.getProducts()) {
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
