import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<Product> = [
    new Product('a', 65536, 12),    
    new Product('紅龜粿', 120, 7)
  ];
  private stepLogs: any[] = [];
  constructor() { }

  public writeLog(){
    var stepLog: Array<Product> = this.products.slice();
    this.stepLogs.push(stepLog);
  }

  public undo() {
    if (this.stepLogs.length > 0) {
      this.products = this.stepLogs.pop().slice();
    }
  }

  public clearProducts() {
    if (this.products.length > 0) {
      this.writeLog();
      this.products.length = 0;
    }
  }

  public getProducts() {
    return this.products;
  }

  public getProduct(id: number) {
    return this.products[id];
  }

  public appendProduct(newProduct:Product) {
    this.writeLog();
    this.products.push(newProduct);
  }
  public edit(id:number, product:Product) {
    this.writeLog();
    this.products[id] = product;
  }

  public remove(id:number) {
    this.writeLog();
    this.products.splice(id, 1);
  }
}
