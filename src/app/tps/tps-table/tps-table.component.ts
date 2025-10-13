import { Component } from '@angular/core';
import { TpsData } from '../../tables/tps-table-child/tps-table-child.component';

@Component({
  selector: 'app-tps-table',
  templateUrl: './tps-table.component.html',
  styleUrls: ['./tps-table.component.css']
})
export class TpsTableComponent {
  tpsData: TpsData[] = [
    { account: 'ACC001', transaction: 'Credit', amount: 1200, date: '2025-10-13' },
    { account: 'ACC002', transaction: 'Debit', amount: 500, date: '2025-10-12' },
    { account: 'ACC003', transaction: 'Credit', amount: 2300, date: '2025-10-11' },
    { account: 'ACC004', transaction: 'Debit', amount: 100, date: '2025-10-10' },
  ];
}
