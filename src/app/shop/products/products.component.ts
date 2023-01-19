import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  productItem: any;
  deltail: any;
  totelcount: any;
  constructor(private item: ProductService) {
    this.productItem = this.item.product;
    this.deltail = this.item.bodyitem;
    this.totelcount = this.item.bodyitem.length;
  }

  ngOnInit(): void {}
}
