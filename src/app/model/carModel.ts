export class CarModel {
  brand: string;
  model: string;
  price: number;
  id: number;

  constructor(brand: string, model: string, price: number, id: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.id = id;
  }
}
