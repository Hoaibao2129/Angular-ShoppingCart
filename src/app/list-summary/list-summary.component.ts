import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent {
  @Input() price: any;
  @Input() sumPrice: any;
  @Input() disCounts: any;
}
