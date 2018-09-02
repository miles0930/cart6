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

  public clearProducts() {
    if (this.products.length > 0) {
      this.products.length = 0;
    }
  }

  public getProducts() {
    return this.products;
  }

  public getProduct(index: number) {
    return this.products[index];
  }

  public appendProduct(newProduct:Product) {
    this.products.push(newProduct);
  }
}
