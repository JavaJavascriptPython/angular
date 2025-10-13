import { Component } from '@angular/core';

@Component({
  selector: 'app-server-response',
  template: `
    <h3 style="margin-top:0">Server Response</h3>
    <div class="server-grid">
      <div class="server-item" *ngFor="let item of items">
        <div class="kv"><div style="font-weight:700">{{ item.name }}</div><div class="badge">{{ item.status }}</div></div>
        <div style="margin-top:8px;color:var(--muted)">{{ item.info }}</div>
      </div>
    </div>
  `
})
export class ServerResponseComponent {
  items = [];
  constructor(){
    for (let r=1;r<=15;r++){
      this.items.push({ name: `Endpoint ${r}`, status: r%3===0 ? 'DOWN' : 'OK', info: `Latency: ${Math.round(40+Math.random()*400)} ms` });
    }
  }
}
