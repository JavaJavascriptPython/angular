import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() dark = false;
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() collapseToggle = new EventEmitter<void>();

  tpsOpen = true;

  constructor(private router: Router) {}

  navTo(route: string) {
    this.router.navigate([route]);
  }
}
