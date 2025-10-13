import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark') dark = false;
  sidebarCollapsed = false;

  greeting = '';
  timeStr = '';
  dateStr = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // read theme from localStorage
    const t = localStorage.getItem('theme');
    this.dark = t === 'dark';

    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    // optional: close sidebar on route change in small screens
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd && window.innerWidth < 800) {
        this.sidebarCollapsed = true;
      }
    });
  }

  toggleTheme() {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    this.greeting = hours < 12 ? 'Good morning' : (hours < 17 ? 'Good afternoon' : 'Good evening');
    this.timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' });
    this.dateStr = now.toLocaleDateString([], { weekday:'short', year:'numeric', month:'short', day:'numeric' });
  }
}
