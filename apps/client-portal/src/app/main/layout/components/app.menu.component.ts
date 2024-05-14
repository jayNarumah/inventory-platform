import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../service/app.layout.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(
    public layoutService: LayoutService,
    // private readonly appStore: Store<AppState>,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit() {
    this.model = [
      {
        items: [
          {
            label: 'Dashboard',
            icon: 'assets/images/logos/Icons/dashboard.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: ['/module'],
          },
          {
            label: 'Sales',
            icon: 'assets/images/logos/Icons/sales.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
          {
            label: 'Category Management',
            icon: 'assets/images/logos/Icons/category.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
          {
            label: 'Inventory Management',
            icon: 'assets/images/logos/Icons/inventory.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
          {
            label: 'User Management',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
          {
            label: 'User Administration',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
          {
            label: 'Reports',
            icon: 'assets/images/logos/Icons/reporting.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
          {
            label: 'Settings',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: [''],
          },
        ],
      },
    ];
  }

  logout() {
    // this.appStore.dispatch(AppAuthActions.logout());
    this.router.navigate(['/auth/login']);
  }

  togleSidebar() {
    this.layoutService.onMenuToggle();
  }


}
