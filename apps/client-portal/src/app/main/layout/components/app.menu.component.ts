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
  model2: any[] = [];
  isClientBudgeting = false;
  isClientBureau = false;
  isClientMda = false;

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
            routerLink: [''],
          },
          {
            label: 'User administration',
            icon: 'assets/images/logos/Icons/management.png',
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
          {
            label: 'Vendors',
            icon: 'assets/images/logos/Icons/excavator.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: [''],
          },
        ],
      },
    ];

    this.model2 = [
      {
        items: [
          {
            label: 'Toggle sidebar',
            icon: 'assets/images/logos/Icons/menu-2.png',
            height: '25',
            padding: 'pt-2',
            routerLink: ["''"],
            command: () => {
              this.togleSidebar();
            },
          },
          {
            label: 'Logout',
            icon: 'assets/images/logos/Icons/exit.png',
            height: '25',
            padding: 'pt-2',
            routerLink: ['/auth/login'],
          },

        ],
      },
    ];
  }

  logout() {
    // this.appStore.dispatch(AppAuthActions.logout());
    this.router.navigate(['/auth/budgeting/login']);
  }

  togleSidebar() {
    this.layoutService.onMenuToggle();
  }


}
