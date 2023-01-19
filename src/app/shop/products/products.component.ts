import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  productItem: any;
  constructor(private item: ProductService) {
    this.productItem = this.item.product;
  }

  ngOnInit(): void {}
}
