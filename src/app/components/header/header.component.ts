import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowMenu = false;
  menu: any[] = [
    {
      point: 'Home',
    },
    {
      point: 'Demo',
    },
    {
      point: 'Inner Pages',
    },
    {
      point: 'Support',
    },
    {
      point: 'Feature',
    },
    {
      point: 'Blog',
    },
  ];

  openLink(e: any, key: any) {
    e.preventDefault();
    if (window.innerWidth <= 960) {
      key.isOpen = !key.isOpen;
    }
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
