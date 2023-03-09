import { Component, Input } from '@angular/core';
import { ISidebarData } from './helper';

@Component({
  selector: 'app-menu-button',
  template: `
    <button mat-menu-item>{{ item.label }}</button>
  `
})
export class MenuButtonComponent {
  @Input() item!: ISidebarData;
}
