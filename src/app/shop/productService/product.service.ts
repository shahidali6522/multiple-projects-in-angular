import { Injectable } from '@angular/core';
import { productModel } from '../productModel/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  public product: productModel[] = [
    // Face Mask $ Packs
    {
      name: 'Moisturizers',
      value: 50,
      image: '/assets/images/moisturizeres.jpg',
    },
    //Toner $ Mists
    {
      name: 'Lip Tint',
      value: 50,
      image: '/assets/images/liptint.jpg',
    },

    // Toner $ Mists
    {
      name: 'Toner $ Mists',
      value: 50,
      image: '/assets/images/tonermosts.jpg',
    },
    // vitamin
    {
      name: 'Shampoo',
      value: 50,
      image: '/assets/images/shampoo.jpg',
    },
    // facemask.jpg
    {
      name: 'Face Mask $ Packs',
      value: 50,
      image: '/assets/images/facemask.jpg',
    },
  ];
}
