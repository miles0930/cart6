import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html'
})
export class addformComponent implements OnInit {

  private product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.product = new Product('', 1, 1)
  }

  private appendProduct() {
    this.cartService.appendProduct(this.product);
    this.product = new Product('', 1,1)
  }

}
