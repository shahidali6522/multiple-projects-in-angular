import { Injectable } from '@angular/core';
import { listModel, detaliModel } from '../productModel/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  public product: listModel[] = [
    // Face Mask $ Packs
    {
      name: 'Moisturizers',
      image: '/assets/images/moisturizeres.jpg',
    },
    //Toner $ Mists
    {
      name: 'Lip Tint',
      image: '/assets/images/liptint.jpg',
    },

    // Toner $ Mists
    {
      name: 'Toner $ Mists',
      image: '/assets/images/tonermosts.jpg',
    },
    // vitamin
    {
      name: 'Shampoo',
      image: '/assets/images/shampoo.jpg',
    },
    // facemask.jpg
    {
      name: 'Face Mask $ Packs',
      image: '/assets/images/facemask.jpg',
    },
  ];
  public bodyitem: detaliModel[] = [
    {
      id: 1,
      sellingPrice: 2865,
      listingPrice: 5500,
      country: 'Pakistan',
      imagesUrl: './assets/images/v.jpg',
      description: 'The Body Shop Vitamin E Hydrating Toner (250ML)',
    },
    {
      id: 2,

      sellingPrice: 2733,
      listingPrice: 3520,
      country: 'Pakistan',
      imagesUrl: './assets/images/shop lip.jpg',
      description:
        'The Body Shop Lip and Cheek Stain Red Pomegranate-003 (50ML)',
    },
    {
      id: 3,
      sellingPrice: 3050,
      listingPrice: 4300,
      country: 'Pakistan',
      imagesUrl: './assets/images/tree shak.jpg',
      description: 'The Body Shop Tea Tree Skin Clearing Facial Wash (250ML)',
    },
    {
      id: 4,
      sellingPrice: 3995,
      listingPrice: 4400,
      country: 'Pakistan',
      imagesUrl: './assets/images/seaweed Oil.jpg',
      description: 'The Body Shop Seaweed Oil-Control Gel Cream (50ML)',
    },
    {
      id: 5,
      sellingPrice: 4800,
      listingPrice: 6500,
      country: 'Pakistan',
      imagesUrl: './assets/images/vitamin.jpg',
      description: 'The Body Shop Vitamin C Glow-protect Lotion SPF 30 (50ML)',
    },
    {
      id: 6,
      sellingPrice: 3585,
      listingPrice: 0,
      country: 'Pakistan',
      imagesUrl: './assets/images/Exfoliator.jpg',
      description: 'The Body Shop Seaweed Pore-Cleansing Exfoliator (100ML)',
    },
    {
      id: 7,
      sellingPrice: 2765,
      listingPrice: 4100,
      country: 'Pakistan',
      imagesUrl: './assets/images/vitamin E.jpg',
      description: 'The Body Shop Vitamin E Gentle Facial Wash (125ML)',
    },
    {
      id: 8,
      sellingPrice: 1950,
      listingPrice: 2230,
      country: 'Pakistan',
      imagesUrl: './assets/images/rosedewy.jpg',
      description: 'Rose Dewy Glow - Face Mist',
    },
    {
      id: 9,
      sellingPrice: 899,
      listingPrice: 2230,
      country: 'Pakistan',
      imagesUrl: './assets/images/Passionberry.jpg',
      description: 'Born Lippy Pot Lip Balm - Passionberry - 10Ml',
    },
  ];
}
