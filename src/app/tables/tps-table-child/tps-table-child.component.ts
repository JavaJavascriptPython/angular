import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface TpsData {
  account: string;
  transaction: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-tps-table-child',
  templateUrl: './tps-table-child.component.html',
  styleUrls: ['./tps-table-child.component.css']
})
export class TpsTableChildComponent implements OnInit {
  @Input() data: TpsData[] = []; // Receive data from parent
  displayedColumns: string[] = ['account', 'transaction', 'amount', 'date'];
  dataSource!: MatTableDataSource<TpsData>;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
