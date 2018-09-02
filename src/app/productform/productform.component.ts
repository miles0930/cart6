import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html'
})
export class ProductformComponent implements OnInit {

  private product: Product;
  private isEdit: number;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private cartService: CartService) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path == 'edit') {
      var index = +this.route.snapshot.paramMap.get('index');
      var oldProduct = this.cartService.getProduct(index-1);
      this.product = new Product(oldProduct.name, oldProduct.price, oldProduct.amount);
      this.isEdit = index;
    }else {
      this.product = new Product('', 1, 1)
      this.isEdit = 0;
    }
  }

  private appendProduct() {
    this.cartService.appendProduct(this.product);
    this.product = new Product('', 1,1);
    this.router.navigate(['/']);
  }
  private edit() {
    this.cartService.edit(this.isEdit-1, this.product);
    this.router.navigate(['/']);
  }

}
