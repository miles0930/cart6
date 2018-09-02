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
  private isEdit: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private cartService: CartService) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path == 'edit') {
      var id = +this.route.snapshot.paramMap.get('index') - 1;
      this.product = this.cartService.getProduct(id);
      this.isEdit = true;
    }else {
      this.product = new Product('', 1, 1)
      this.isEdit = false;
    }
  }

  private appendProduct() {
    this.cartService.appendProduct(this.product);
    this.product = new Product('', 1,1);
    this.router.navigate(['/'])
  }

}
