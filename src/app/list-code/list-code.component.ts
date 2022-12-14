import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-code',
  templateUrl: './list-code.component.html',
  styleUrls: ['./list-code.component.scss'],
})
export class ListCodeComponent {
  voucher: any;

  @Output() onApplyVoucher = new EventEmitter();
  inputVoucher() {
    const code = this.voucher;

    if (code && code.trim() !== '') {
      this.onApplyVoucher.emit(code);
      this.voucher = '';
    }
  }
}
