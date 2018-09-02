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

  private getProducts() {
    return this.cartService.getProducts();
  }
  private clearProducts() {
    this.cartService.clearProducts();
  }
  private undo() {
    this.cartService.undo();
  }
  private remove(id) {
    this.cartService.remove(id);
  }
  private getSum() {
    var sum: number = 0;
    for (var product of this.cartService.getProducts()) {
      sum = sum + product.price * product.amount;
    }
    return sum;
  }
  private countTax() {
    return this.getSum() - this.getSum() * 0.05;
  }

  private countSum() {
    return this.getSum() + this.countTax();
  }
}
