import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cards = [
    { title: 'TPS (1m avg)', value: '3,204' },
    { title: 'Errors (24h)', value: '12' },
    { title: 'Latency P95', value: '142 ms' },
    { title: 'Active Servers', value: '8' },
    { title: 'Requests', value: '1.2M' },
    { title: 'Throughput', value: '420 MB/s' },
    { title: 'Alerts', value: '2' },
    { title: 'Uptime', value: '99.98%' }
  ];

  // Example data to pass to child charts
  scatterData = {
    series: [{ data: ((): any[] => { const arr=[]; for(let i=0;i<180;i++) arr.push([Math.random()*100, Math.random()*100, Math.random()*80]); return arr; })() }]
  };

  barData = {
    categories: ['srv-1','srv-2','srv-3','srv-4','srv-5','srv-6','srv-7'],
    values: [120, 340, 210, 450, 320, 180, 90]
  };

  lineData = {
    labels: Array.from({length: 24}, (_,i)=> `${i}:00`),
    values: Array.from({length:24}, ()=> Math.round(100 + Math.random()*600))
  };
}
