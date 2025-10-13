import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tps-graph',
  templateUrl: './tps-graph.component.html',
  styleUrls: ['./tps-graph.component.css']
})
export class TpsGraphComponent implements OnInit {
  xData: string[] = [];
  yData: number[] = [];

  ngOnInit() {
    this.generateData();
  }

  generateData() {
// X-axis = transactions, Y-axis = time
// const xData: number[] = [];
// const yData: string[] = [];

const start = new Date();
start.setHours(0, 0, 0, 0);

for (let i = 0; i < 24 * 60; i++) {
  const time = new Date(start.getTime() + i * 60000);
  const hh = time.getHours().toString().padStart(2, '0');
  const mm = time.getMinutes().toString().padStart(2, '0');
  this.xData.push(`${hh}:${mm}`);

  // Transactions pattern: low morning (0-11h), higher afternoon (12-17h), low evening (18-23h)
  let transactions = 0;
  if (time.getHours() >= 0 && time.getHours() < 12) {
    transactions = Math.floor(5 + Math.random() * 5);          // Low
  } else if (time.getHours() >= 12 && time.getHours() < 18) {
    transactions = Math.floor(20 + Math.random() * 15);        // High
  } else {
    transactions = Math.floor(5 + Math.random() * 5);          // Low
  }

  this.yData.push(transactions);
}

// Example outputs (first 10)
console.log('xData:', this.xData.slice(0, 10));
console.log('yData:', this.yData.slice(0, 10));

  }
}



