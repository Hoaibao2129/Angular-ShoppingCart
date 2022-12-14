import { Injectable } from '@angular/core';
import { Products } from './body/common/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Products[] = [
    {
      id: 1,
      name: 'IPHONE 12',
      description: 'Ram : 8GB , ROM : 128GB',
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-den-new-2-200x200.jpg',
      price: 11000000,
      quantity: 1,
    },
    {
      id: 2,
      name: 'SAMSUNG GALAXY S21',
      description: 'Ram : 12GB , ROM : 128GB',
      image:
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-200x200.jpg',
      price: 7900000,
      quantity: 1,
    },
  ];

  getProducts(): Products[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  findIndexById(id: number): number {
    return this.products.findIndex((product) => product.id === id);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.findById(id);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}
