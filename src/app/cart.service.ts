import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<Product> = [
    new Product('a', 5, 10),
    new Product('b', 1, 15)
  ];
  constructor() { }

  public getProducts() {
    return this.products;
  }
}
