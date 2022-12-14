import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() products: any;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  constructor() {}
  ngOnInit() {}

  delete(id: any) {
    this.onRemoveProduct.emit(id);
  }

  updateQuantity(element: any, id: any) {
    let index = this.products.findIndex((products: any) => products.id === id);
    this.products[index].quantity = element.value;
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);

    // if (intValue < 1) {
    //   inputElement.value = -intValue + '';
    // } else if (value.length > 2) {
    //   inputElement.value = value.slice(0, 2);
    // }

    this.onUpdateQuantity.emit({
      id,
      quantity: parseInt(inputElement.value) || '',
    });
  }
}
