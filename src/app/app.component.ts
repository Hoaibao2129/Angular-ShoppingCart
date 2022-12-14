import { Component, DoCheck } from '@angular/core';
import { Products } from './body/common/products';
import { Voucher } from './body/common/voucher';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  vouchers: Voucher[] = [
    { name: '12/12', discount: 10 },
    { name: 'BANCUABAO', discount: 100 },
    { name: 'BLACKFRIDAY', discount: 20 },
  ];
  inPutVoucher: string[] = [];
  products: Products[] = [];
  numberItem: number = 0;
  CoutSum: number = 0;
  subTotal: number = 0;
  disCounts: number = 0;
  constructor(private productService: ProductService) {}
  ngDoCheck() {}
  ngOnInit() {
    this.products = this.productService.getProducts();
    this.updateSummary();
  }

  updateNumberItem() {
    let numberItem: any;
    for (const product of this.products) {
      numberItem += product.quantity;
    }

    this.numberItem = numberItem;
  }
  updateSummary() {
    let numberItem: number = 0;
    let coutSum: number = 0;
    let subTotal: number = 0;

    for (const product of this.products) {
      numberItem += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItem = numberItem;
    this.subTotal = subTotal;
    this.CoutSum = subTotal;
  }

  handleRemoveProduct(id: number) {
    this.productService.removeProduct(id);
    this.updateSummary();
  }

  handleUpdateQuantity(products: { id: number; quantity: number }) {
    this.productService.updateQuantity(products.id, products.quantity);
    this.updateSummary();
  }

  applyVoucher(voucherI: any) {
    let n: number = 0;
    let i: number = 0;
    for (const input of this.inPutVoucher) {
      if (input === voucherI) {
        i++;
      }
    }
    if (i === 0) {
      for (const voucher of this.vouchers) {
        if (voucher.name === voucherI) {
          this.CoutSum = this.CoutSum - (this.CoutSum * voucher.discount) / 100;
          this.disCounts = voucher.discount;
          n++;
          this.inPutVoucher.push(voucherI);
        }
      }
      if (n === 0) {
        alert('MÃ KHÔNG TỒN TẠI');
      }
    } else {
      alert('BẠN ĐÃ ÁP DỤNG MÃ GIẢM GIÁ');
    }
  }
}
